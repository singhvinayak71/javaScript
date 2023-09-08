const listItems = ['HTML' , 'CSS' , 'JavaScript' , 'React' , 'Sql' , 'MongoDb' , 'Node.js' , 'Git & Github' , 'Tailwind'];

const btn = document.querySelector('#btn')


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

btn.addEventListener('click', genrateOrderList);

if(ol){
    alert('the list already exist')
}