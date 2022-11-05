function solution(sizes) {
  
    const sortSizes = sizes.map((size) => size.sort((a,b) => a-b))
    const rowSizes = Math.max(...sortSizes.map((size) => size[0]))
    const columnSizes = Math.max(...sortSizes.map((size) => size[1]))
    
    return  rowSizes * columnSizes
    
}
