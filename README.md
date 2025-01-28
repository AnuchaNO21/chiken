<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>บันทึกการใช้จ่ายและรายรับส่วนบุคคล</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>ระบบบันทึกการใช้จ่ายและรายรับ</h1>
         
        <!-- ฟอร์มล็อกอิน -->
        <div id="loginForm" class="form-container">
            <h2>ล็อกอิน</h2>
            <form id="login">
                <label for="username">ชื่อผู้ใช้:</label>
                <input type="text" id="username" required>
               
                <label for="password">รหัสผ่าน:</label>
                <input type="password" id="password" required>
               
                <button type="submit">ล็อกอิน</button>
            </form>
            <p id="loginError" class="error-message"></p>
            <p><a href="javascript:void(0);" id="goToSignup">สมัครสมาชิก</a></p>
        </div>

        <!-- ฟอร์มสมัครสมาชิก -->
        <div id="signupForm" class="form-container" style="display: none;">
            <h2>สมัครสมาชิก</h2>
            <form id="signup">
                <label for="newUsername">ชื่อผู้ใช้:</label>
                <input type="text" id="newUsername" required>
               
                <label for="newPassword">รหัสผ่าน:</label>
                <input type="password" id="newPassword" required>
               
                <label for="confirmPassword">ยืนยันรหัสผ่าน:</label>
                <input type="password" id="confirmPassword" required>
               
                <button type="submit">สมัครสมาชิก</button>
                                
            </form>
            <p id="signupError" class="error-message"></p>
            <p><a href="javascript:void(0);" id="goToLogin">กลับไปที่หน้าเข้าสู่ระบบ</a></p>
        </div>
             
        <!-- หน้า Dashboard (แสดงการใช้จ่ายและรายรับ) -->
        <div id="dashboard" class="form-container" style="display: none;">
            <h2>บันทึกการใช้จ่ายและรายรับส่วนบุคคล</h2>
            <h3>สวัสดี, <span id="welcomeUser"></span>!</h3>
           
            <!-- ฟอร์มบันทึกการใช้จ่าย -->
            <form id="expenseForm">
                <label for="date">วันที่:</label>
                <input type="date" id="date" required>
               
                <label for="category">หมวดหมู่:</label>
                <select id="category" required>
                    <option value="">เลือกหมวดหมู่</option>
                    <option value="อาหาร">อาหาร</option>
                    <option value="การเดินทาง">การเดินทาง</option>
                    <option value="ค่าบ้าน">ค่าบ้าน</option>
                    <option value="สุขภาพ">สุขภาพ</option>
                    <option value="บันเทิง">บันเทิง</option>
                    <option value="อื่นๆ">อื่นๆ</option>
                </select>
               
                <label for="amount">จำนวนเงิน (บาท):</label>
                <input type="number" id="amount" placeholder="จำนวนเงิน" required>
               
                <label for="description">คำอธิบาย:</label>
                <textarea id="description" placeholder="รายละเอียดเพิ่มเติม"></textarea>
               
                <button type="submit">บันทึกการใช้จ่าย</button>
            </form>

            <!-- ฟอร์มบันทึกรายรับ -->
            <h2>บันทึกรายรับ</h2>
            <form id="incomeForm">
                <label for="incomeDate">วันที่:</label>
                <input type="date" id="incomeDate" required>
               
                <label for="incomeCategory">หมวดหมู่:</label>
                <select id="incomeCategory" required>
                    <option value="เงินเดือน">เงินเดือน</option>
                    <option value="โบนัส">โบนัส</option>
                    <option value="รายรับอื่นๆ">รายรับอื่นๆ</option>
                </select>
               
                <label for="incomeAmount">จำนวนเงิน (บาท):</label>
                <input type="number" id="incomeAmount" required>
               
                <label for="incomeDescription">คำอธิบาย:</label>
                <textarea id="incomeDescription"></textarea>
               
                <button type="submit">บันทึกรายรับ</button>
            </form>

            <!-- ตารางแสดงรายการการใช้จ่าย -->
            <h2>รายการการใช้จ่าย</h2>
            <table id="expenseTable">
                <thead>
                    <tr>
                        <th>วันที่</th>
                        <th>หมวดหมู่</th>
                        <th>จำนวนเงิน</th>
                        <th>คำอธิบาย</th>
                        <th>ลบ</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>

            <!-- ตารางแสดงรายการรายรับ -->
            <h2>รายการรายรับ</h2>
            <table id="incomeTable">
                <thead>
                    <tr>
                        <th>วันที่</th>
                        <th>หมวดหมู่</th>
                        <th>จำนวนเงิน</th>
                        <th>คำอธิบาย</th>
                        <th>ลบ</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>

            <!-- ยอดรวม -->
            <h3>รวมการใช้จ่ายทั้งหมด: <span id="totalAmount">0</span> บาท</h3>
            <h3>รวมรายรับทั้งหมด: <span id="totalIncomeAmount">0</span> บาท</h3>
            <h3>ยอดสุทธิ: <span id="netAmount">0</span> บาท</h3>
           
            <button id="logoutButton">ออกจากระบบ</button>
        </div>
    </div>

    <script src="javascript.js"></script>
                          <p style="color: white; background-color: white;">ข้อความนี้ล่องหน</p>
             <p style="color: white; background-color: white;">ข้อความนี้ล่องหน</p>
             <p style="color: white; background-color: white;">ข้อความนี้ล่องหน</p>
             <p style="color: white; background-color: white;">ข้อความนี้ล่องหน</p>
                         <p style="color: white; background-color: white;">ข้อความนี้ล่องหน</p>

<footer>
    <p> © 2025 Expense Tracker</p>
  </footer>
</body>
</html>

// การจัดการข้อมูลผู้ใช้
let users = JSON.parse(localStorage.getItem('users')) || []; // โหลดข้อมูลจาก localStorage
let currentUser = JSON.parse(localStorage.getItem('currentUser')); // ข้อมูลผู้ใช้ที่ล็อกอินแล้ว
let expenses = JSON.parse(localStorage.getItem('expenses')) || []; // ข้อมูลการใช้จ่าย
let incomes = JSON.parse(localStorage.getItem('incomes')) || []; // ข้อมูลรายรับ

// ฟังก์ชั่นตรวจสอบการล็อกอิน
function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user)); // บันทึกข้อมูลผู้ใช้ที่ล็อกอิน
        currentUser = user;
        loginForm.style.display = "none";
        dashboard.style.display = "block";

        // Display the username after successful login
        document.getElementById("welcomeUser").textContent = user.username;

        return true;
    }
    return false;
}

// ฟังก์ชั่นเพิ่มรายการการใช้จ่าย
function addExpense(date, category, amount, description) {
    if (!currentUser) {
        alert("กรุณาล็อกอินก่อน");
        return;
    }

    const expense = {
        user: currentUser.username,  // เพิ่มผู้ใช้เพื่อแยกข้อมูลการใช้จ่าย
        date: date,
        category: category,
        amount: parseFloat(amount),
        description: description
    };

    expenses.push(expense); // เพิ่มรายการลงใน array ของ expenses
    localStorage.setItem('expenses', JSON.stringify(expenses)); // บันทึกการใช้จ่ายลงใน localStorage
    displayExpenses(); // แสดงรายการการใช้จ่ายใหม่
    updateTotalAmount(); // อัปเดตยอดรวม
    updateNetAmount(); // อัปเดตยอดสุทธิ
}

// ฟังก์ชั่นเพิ่มรายการรายรับ
function addIncome(date, category, amount, description) {
    if (!currentUser) {
        alert("กรุณาล็อกอินก่อน");
        return;
    }

    const income = {
        user: currentUser.username,  // เพิ่มผู้ใช้เพื่อแยกข้อมูลรายรับ
        date: date,
        category: category,
        amount: parseFloat(amount),
        description: description
    };

    incomes.push(income); // เพิ่มรายการลงใน array ของ incomes
    localStorage.setItem('incomes', JSON.stringify(incomes)); // บันทึกรายรับลงใน localStorage
    displayIncomes(); // แสดงรายการรายรับใหม่
    updateTotalIncomeAmount(); // อัปเดตยอดรวมรายรับ
    updateNetAmount(); // อัปเดตยอดสุทธิ
}

// ฟังก์ชั่นบันทึกการใช้จ่าย
document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault();  // ป้องกันการรีเฟรชหน้าเพจเมื่อกด submit

    const date = document.getElementById('date').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    if (!date || !category || !amount) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
    }

    addExpense(date, category, amount, description);  // เรียกใช้ฟังก์ชั่น addExpense
});

// ฟังก์ชั่นบันทึกรายรับ
document.getElementById('incomeForm').addEventListener('submit', function(event) {
    event.preventDefault();  // ป้องกันการรีเฟรชหน้าเพจเมื่อกด submit

    const incomeDate = document.getElementById('incomeDate').value;
    const incomeCategory = document.getElementById('incomeCategory').value;
    const incomeAmount = document.getElementById('incomeAmount').value;
    const incomeDescription = document.getElementById('incomeDescription').value;

    if (!incomeDate || !incomeCategory || !incomeAmount) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
    }

    addIncome(incomeDate, incomeCategory, incomeAmount, incomeDescription);  // เรียกใช้ฟังก์ชั่น addIncome
});

// ฟังก์ชั่นแสดงรายการการใช้จ่าย
function displayExpenses() {
    const expenseTable = document.getElementById('expenseTable').getElementsByTagName('tbody')[0];
    expenseTable.innerHTML = '';  // ลบข้อมูลเก่า

    let totalAmount = 0;

    const userExpenses = expenses.filter(expense => expense.user === currentUser.username);

    userExpenses.forEach((expense) => {
        const row = expenseTable.insertRow();
        row.insertCell(0).textContent = expense.date;
        row.insertCell(1).textContent = expense.category;
        row.insertCell(2).textContent = expense.amount.toFixed(2);
        row.insertCell(3).textContent = expense.description;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'ลบ';
        deleteButton.className = 'delete';
        deleteButton.onclick = () => deleteExpense(expense);
        row.insertCell(4).appendChild(deleteButton);

        totalAmount += expense.amount;
    });

    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}

// ฟังก์ชั่นแสดงรายการรายรับ
function displayIncomes() {
    const incomeTable = document.getElementById('incomeTable').getElementsByTagName('tbody')[0];
    incomeTable.innerHTML = '';  // ลบข้อมูลเก่า

    let totalIncomeAmount = 0;

    const userIncomes = incomes.filter(income => income.user === currentUser.username);

    userIncomes.forEach((income) => {
        const row = incomeTable.insertRow();
        row.insertCell(0).textContent = income.date;
        row.insertCell(1).textContent = income.category;
        row.insertCell(2).textContent = income.amount.toFixed(2);
        row.insertCell(3).textContent = income.description;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'ลบ';
        deleteButton.className = 'delete';
        deleteButton.onclick = () => deleteIncome(income);
        row.insertCell(4).appendChild(deleteButton);

        totalIncomeAmount += income.amount;
    });

    document.getElementById('totalIncomeAmount').textContent = totalIncomeAmount.toFixed(2);
}

// ฟังก์ชั่นลบรายการการใช้จ่าย
function deleteExpense(expense) {
    const confirmDelete = confirm("คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?");
    if (confirmDelete) {
        expenses = expenses.filter(e => e !== expense);  // ลบรายการ
        localStorage.setItem('expenses', JSON.stringify(expenses));
        displayExpenses();  // แสดงรายการใหม่
        updateTotalAmount();  // อัปเดตยอดรวม
        updateNetAmount();  // อัปเดตยอดสุทธิ
    }
}


// ฟังก์ชั่นลบรายการรายรับ
function deleteIncome(income) {
    const confirmDelete = confirm("คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?");
    if (confirmDelete) {
        incomes = incomes.filter(i => i !== income); // ลบรายการ
        localStorage.setItem('incomes', JSON.stringify(incomes));
        displayIncomes(); // แสดงรายการใหม่
        updateTotalIncomeAmount(); // อัปเดตยอดรวมรายรับ
        updateNetAmount(); // อัปเดตยอดสุทธิ
    }
}

// ฟังก์ชั่นคำนวณยอดสุทธิ
function updateNetAmount() {
    const totalExpenseAmount = parseFloat(document.getElementById('totalAmount').textContent) || 0;
    const totalIncomeAmount = parseFloat(document.getElementById('totalIncomeAmount').textContent) || 0;

    const netAmount = totalIncomeAmount - totalExpenseAmount;
    document.getElementById('netAmount').textContent = netAmount.toFixed(2);
}

// ฟังก์ชั่นคำนวณยอดรวมการใช้จ่าย
function updateTotalAmount() {
    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
    document.getElementById('totalAmount').textContent = totalAmount.toFixed(2);
}


// ฟังก์ชั่นคำนวณยอดรวมรายรับ
function updateTotalIncomeAmount() {
    const totalIncomeAmount = incomes.reduce((total, income) => total + income.amount, 0);
    document.getElementById('totalIncomeAmount').textContent = totalIncomeAmount.toFixed(2);
}

// ฟังก์ชั่นล็อกอิน
document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
   
    if (login(username, password)) {
        displayExpenses();
        displayIncomes();
        updateNetAmount();
    } else {
        document.getElementById('loginError').textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
    }
});

// ฟังก์ชั่นสมัครสมาชิก
document.getElementById('signup').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        document.getElementById('signupError').textContent = "รหัสผ่านไม่ตรงกัน";
        return;
    }

    const existingUser = users.find(user => user.username === newUsername);
    if (existingUser) {
        document.getElementById('signupError').textContent = "ชื่อผู้ใช้นี้ถูกใช้งานแล้ว";
        return;
    }

    const newUser = { username: newUsername, password: newPassword };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    document.getElementById('signupError').textContent = "สมัครสมาชิกสำเร็จ!";
    setTimeout(() => document.getElementById('goToLogin').click(), 1000);
});

// ฟังก์ชั่นเปลี่ยนไปหน้าล็อกอิน
document.getElementById('goToSignup').addEventListener('click', function() {
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('signupForm').style.display = "block";
});

// ฟังก์ชั่นกลับไปหน้าล็อกอิน
document.getElementById('goToLogin').addEventListener('click', function() {
    document.getElementById('signupForm').style.display = "none";
    document.getElementById('loginForm').style.display = "block";
});

// ฟังก์ชั่นออกจากระบบ
document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('currentUser');
    window.location.reload();
});

/* ตั้งค่าพื้นฐาน */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #a8edea, #fed6e3);
  color: #333;
}

/* จัดศูนย์หน้าหลัก */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

/* ฟอร์ม */
form {
  background: white;
  padding: 20px;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
}

form h2 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #555;
}

form input,
form button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
}

form input:focus {
  outline: none;
  border: 1px solid #6c63ff;
}

form button {
  background: linear-gradient(45deg, #6c63ff, #48c6ef);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

form button:hover {
  background: linear-gradient(45deg, #48c6ef, #6c63ff);
}

/* ปุ่ม Logout */
#logoutButton {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

#logoutButton:hover {
  background: #ff3b3b;
}

/* ตารางข้อมูล */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

table thead {
  background: #6c63ff;
  color: white;
}

table th,
table td {
  padding: 15px;
  text-align: center;
  border: 1px solid #ddd;
}

table tr:nth-child(even) {
  background: #f9f9f9;
}

table tr:hover {
  background: #f1f1f1;
}

table button {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

table button:hover {
  background: #ff3b3b;
}

/* แถบเมนู */
nav {
  background: #6c63ff;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

nav h1 {
  font-size: 24px;
  margin: 0;
}

nav a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 18px;
  transition: color 0.3s;
}

nav a:hover {
  color: #a8edea;
}

/* Footer */
footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
  margin-top: 20px;
  font-size: 14px;
}

footer a {
  color: #48c6ef;
  text-decoration: none;
  transition: color 0.3s;
}

footer a:hover {
  color: #6c63ff;
}
