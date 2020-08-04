let map1 = new Map([
  ["name", "John Doe"],
  ["age", 20],
])

let map2 = new Map([
  ["address", "Main Street 123"],
  ["isDev", true],
])

// Merge "map1" and "map2"
let map = new Map([...map1, ...map2])

console.log(map)
/*
    Map {
      "name" => "John Doe",
      "age" => 20,
      "address" => "Main Street 123",
      "isDev" => true
    }
  */
