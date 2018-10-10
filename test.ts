interface abc {
  color?: string //类型名称后面带问号，是因为此类型是值类型，如果你需要这个类型名称可以为空，则需要带问号才不会报错
  width?: number
}

function creatSquare(config: abc): { color: string; area: number } {
  let newabc = { color: "white", area: 100 }
  if (config.color) {
    newabc.color = config.color
  }

  if (config.width) {
    newabc.area = config.width * config.width
  }

  return newabc
}

let myabc = creatSquare({ color: "black" })
