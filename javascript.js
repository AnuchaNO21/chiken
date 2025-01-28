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