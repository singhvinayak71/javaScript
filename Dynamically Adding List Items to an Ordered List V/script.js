const listItems = ['HTML' , 'CSS' , 'JavaScript' , 'React' , 'Sql' , 'MongoDb' , 'Node.js' , 'Git & Github' , 'Tailwind'];

const listBlock = document.getElementById('listBlock');

const genrateOrderList = () =>{
    let orderList = document.createElement('ol');
    listItems.forEach(item =>{
        let list = document.createElement('li');
        list.innerHTML = item;
        orderList.append(list);

    })
    listBlock.appendChild(orderList);
}