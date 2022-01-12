function getAddress(houseNumber, streetNumber) {
  if (isNaN(houseNumber) || typeof streetNumber !== "string") {
    throw "Address is indalid";
  }
}

try {
  getAddress(1000, "White street");
} catch (e) {
  console.error(e);
}

// Throw an object
// Test invalid phone numder format

function PhoneNumber(number) {
  number = new String(number);
  regExpPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (regExpPattern.test(number)) {
    this.value = number.match(regExpPattern)[0];
    this.valueOf = function () {
      return this.value;
    };
    this.toString = function () {
      return String(this.value);
    };
  } else {
    console.log("err");
    //throw new NumberFormatException(number);
  }
}

function NumberFormatException(value) {
  this.value = value;
  this.message = "Does not conform to the expected format for a phone number";
  this.toString = function () {
    return this.value + this.message;
  };
}

const PHONENUMBER_INVALID = -1;
const PHONENUMBER_UNKNOWN_ERROR = -2;

function verifyPhoneNumber(n) {
  try {
    n = new PhoneNumber(n);
  } catch (e) {
    if (e instanceof NumberFormatException) {
      return PHONENUMBER_INVALID;
    } else {
      PHONENUMBER_UNKNOWN_ERROR;
    }
  }
  return n;
}

a = verifyPhoneNumber("423-000-0000"); // returns 423-000-0000
b = verifyPhoneNumber("text"); // return -1
c = verifyPhoneNumber("423"); // return -1
