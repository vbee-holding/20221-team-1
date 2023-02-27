## Link demo sản phầm: https://worldcuppro2022.netlify.app/
## Cách cài đặt chương trình

## Bước 1: Clone code từ repo về máy bằng lệnh
```
git clone https://github.com/vbee-holding/20221-team-1.git
```

## Bước 2: Mở project bằng IDE hoặc Editor bất kì
## Bước 3: Mở terminal và cài đặt các thư viện cần thiết ở từng folder client và server
```
npm install
```

## Bước 4: 
### Ở folder server: Tạo file .env với nội dung như sau
```
MONGODB_URL = mongodb+srv://ndhoanganh20204510:hoanganhdragontx01@cluster0.3ivnhhx.mongodb.net/?retryWrites=true&w=majority

PORT = 8081

HOST_NAME = localhost

```

### Ở folder client: Tạo file .env với nội dung như sau
```
REACT_APP_DOMAIN = http://localhost:8081
```

## Bước 5: Chạy server bằng lệnh
```
npm start
```

## Bước 6: Chạy client bằng lệnh
```
npm start
```
