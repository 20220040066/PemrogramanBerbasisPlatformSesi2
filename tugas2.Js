// No 1 Buatlah variabel firstName, lastName, age, isMarried dengan ketentuan:
const FirstName = " Silva ";
const LastName = " Destiani ";
const age = 19;
const isMarried = false;
//melakukan pengujian dengan console.log()
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isMarried);

// atau bisa juga seperti ini
// no 1. firstName : bertipe data string, dengan nama depan
console.log(" * Silva ")
//atau bisa seperti ini untuk memanggil nama depan
var firstName = "Silva"
console.log(" Nama depan  : " + firstName)

// no 2. bertipe data string, dengan nilai nama belakang anda
console.log(" * Destiani ")
//cara lain
var lastName = " Destiani "
console.log( " * Nama belakang : " + lastName)

//untuk menggabungkan nama depan dan nama belakang
var firstName = " silva "
function printFullName(){
    var lastName = " Destiani "
    return firstName + " " + lastName
}
console.log(" fullName " +printFullName())

// no 3. bertipe data number, dengan nilai umur anda
console.log(" umur saya " +19)
//isMarried
const Menikah = 25
const nomarried = 20

const sudahMenikah = menikah > 20
const belumMenikah = nomarried > 20

const KeputusanMenikah = sudahMenikah && belumMenikah
console.log(KeputusanMenikah)
