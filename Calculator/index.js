        // Example 1: Simple Calculator
        function calculate() {
            // INPUT
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const operator = document.getElementById('operator').value;
            
            // PROCESS
            let result;
            if (isNaN(num1) || isNaN(num2)) {
                result = "Vui lòng nhập số hợp lệ!";
            } else {
                switch(operator) {
                    case '+': result = num1 + num2; break;
                    case '-': result = num1 - num2; break;
                    case '*': result = num1 * num2; break;
                    case '/': result = num2 !== 0 ? num1 / num2 : "Không thể chia cho 0!"; break;
                    default: result = "Lỗi toán tử!";
                }
            }
            
            // OUTPUT
            document.getElementById('calcResult').innerHTML = 
                `<strong>Kết quả:</strong> ${num1} ${operator} ${num2} = ${result}`;
        }

        // Example 2: Grade Calculator
        function calculateGrade() {
            // INPUT
            const score = parseFloat(document.getElementById('score').value);
            
            // PROCESS
            let grade, message;
            if (isNaN(score) || score < 0 || score > 100) {
                grade = "Lỗi";
                message = "Vui lòng nhập điểm từ 0 đến 100!";
            } else if (score >= 90) {
                grade = "A";
                message = "Xuất sắc! 🎉";
            } else if (score >= 80) {
                grade = "B";
                message = "Giỏi! 👍";
            } else if (score >= 70) {
                grade = "C";
                message = "Khá! 👌";
            } else if (score >= 60) {
                grade = "D";
                message = "Trung bình! 😐";
            } else {
                grade = "F";
                message = "Cần cải thiện! 💪";
            }
            
            // OUTPUT
            document.getElementById('gradeResult').innerHTML = 
                `<strong>Điểm:</strong> ${score}/100<br><strong>Xếp loại:</strong> ${grade}<br><strong>Nhận xét:</strong> ${message}`;
        }

        // Example 3: Age Calculator
        function calculateAge() {
            // INPUT
            const birthDate = new Date(document.getElementById('birthDate').value);
            const today = new Date();
            
            // PROCESS
            if (isNaN(birthDate.getTime()) || birthDate > today) {
                document.getElementById('ageResult').innerHTML = 
                    `<span class="error">Vui lòng nhập ngày sinh hợp lệ!</span>`;
                return;
            }
            
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            
            // OUTPUT
            document.getElementById('ageResult').innerHTML = 
                `<strong>Ngày sinh:</strong> ${birthDate.toLocaleDateString('vi-VN')}<br><strong>Tuổi:</strong> ${age} tuổi`;
        }

        // Example 4: BMI Calculator
        function calculateBMI() {
            // INPUT
            const weight = parseFloat(document.getElementById('weight').value);
            const height = parseFloat(document.getElementById('height').value);
            
            // PROCESS
            if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
                document.getElementById('bmiResult').innerHTML = 
                    `<span class="error">Vui lòng nhập cân nặng và chiều cao hợp lệ!</span>`;
                return;
            }
            
            const heightInMeters = height / 100;
            const bmi = weight / (heightInMeters * heightInMeters);
            
            let classification;
            if (bmi < 18.5) {
                classification = "Thiếu cân";
            } else if (bmi < 25) {
                classification = "Bình thường";
            } else if (bmi < 30) {
                classification = "Thừa cân";
            } else {
                classification = "Béo phì";
            }
            
            // OUTPUT
            document.getElementById('bmiResult').innerHTML = 
                `<strong>BMI:</strong> ${bmi.toFixed(2)}<br><strong>Phân loại:</strong> ${classification}`;
        }

        // Example 5: Temperature Converter
        function convertTemperature() {
            // INPUT
            const temp = parseFloat(document.getElementById('temperature').value);
            const fromUnit = document.getElementById('fromUnit').value;
            const toUnit = document.getElementById('toUnit').value;
            
            // PROCESS
            if (isNaN(temp)) {
                document.getElementById('tempResult').innerHTML = 
                    `<span class="error">Vui lòng nhập nhiệt độ hợp lệ!</span>`;
                return;
            }
            
            let celsius;
            // Convert to Celsius first
            switch(fromUnit) {
                case 'celsius': celsius = temp; break;
                case 'fahrenheit': celsius = (temp - 32) * 5/9; break;
                case 'kelvin': celsius = temp - 273.15; break;
            }
            
            let result;
            // Convert from Celsius to target unit
            switch(toUnit) {
                case 'celsius': result = celsius; break;
                case 'fahrenheit': result = celsius * 9/5 + 32; break;
                case 'kelvin': result = celsius + 273.15; break;
            }
            
            // OUTPUT
            document.getElementById('tempResult').innerHTML = 
                `<strong>Kết quả:</strong> ${temp}°${fromUnit.charAt(0).toUpperCase()} = ${result.toFixed(2)}°${toUnit.charAt(0).toUpperCase()}`;
        }

        // Example 6: Password Generator
        function generatePassword() {
            // INPUT
            const length = parseInt(document.getElementById('passwordLength').value);
            const includeUppercase = document.getElementById('includeUppercase').checked;
            const includeLowercase = document.getElementById('includeLowercase').checked;
            const includeNumbers = document.getElementById('includeNumbers').checked;
            const includeSymbols = document.getElementById('includeSymbols').checked;
            
            // PROCESS
            if (length < 4 || length > 50) {
                document.getElementById('passwordResult').innerHTML = 
                    `<span class="error">Độ dài mật khẩu phải từ 4 đến 50 ký tự!</span>`;
                return;
            }
            
            let charset = '';
            if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
            if (includeNumbers) charset += '0123456789';
            if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';
            
            if (charset === '') {
                document.getElementById('passwordResult').innerHTML = 
                    `<span class="error">Vui lòng chọn ít nhất một loại ký tự!</span>`;
                return;
            }
            
            let password = '';
            for (let i = 0; i < length; i++) {
                password += charset.charAt(Math.floor(Math.random() * charset.length));
            }
            
            // OUTPUT
            document.getElementById('passwordResult').innerHTML = 
                `<strong>Mật khẩu được tạo:</strong> <code style="background: #f0f0f0; padding: 5px; border-radius: 3px; font-family: monospace;">${password}</code>`;
        }
