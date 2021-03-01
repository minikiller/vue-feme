import jwt_decode from "jwt-decode";

var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTcxNjU0MDYsImlhdCI6MTYxNDU3MzQwNiwibmJmIjoxNjE0NTczNDA2LCJpZGVudGl0eSI6Mn0.AeUOMRuvadwn14eaJsPvweo_l7ClXeNJObC5ACO9nsQ";
var decoded = jwt_decode(token);

console.log(decoded.identity);

/* prints:
 * { foo: "bar",
 *   exp: 1393286893,
 *   iat: 1393268893  }
 */

// decode header by passing in options (useful for when you need `kid` to verify a JWT):
// var decodedHeader = jwt_decode(token, { header: true });
// console.log(decodedHeader);
