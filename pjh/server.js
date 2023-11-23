const mongoose = require('mongoose');
const xlsx = require('xlsx');
const Recipe = require('./dbFrame');

const excelFilePath = './음식 DB.xlsx';
const workbook = xlsx.readFile(excelFilePath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(sheet);

mongoose.connect('mongodb+srv://bgu03291:qwedqwed123@swproject.cp4op2b.mongodb.net/swProject', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // 엑셀 데이터를 JSON으로 변환

    // MongoDB에 데이터 저장
    (async () => {
      try {
        for (const data of jsonData) {
          console.log('Data from Excel:', data);
          const newRecipe = new Recipe({
            이름: data['이름'],
            종류: data['종류'],
            세부_종류: data['세부_종류'],
            레시피_이미지_파일_URL: data['레시피_이미지_파일_URL'],
            음식_이미지_파일_URL: data['음식_이미지_파일_URL']
          });

          await newRecipe.save();
          console.log('Recipe saved successfully.');
        }
      } catch (error) {
        console.error(error);
      } finally {
        // 연결 종료
        mongoose.connection.close();
      }
    })();
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));
