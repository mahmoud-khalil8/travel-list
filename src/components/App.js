import  {useState}  from "react";
import  Form  from "./Form";
import  PackingList  from "./PackingList";
import  Stats  from "./Stats";


export default  function App (){
    const [items,setItems]=useState([]) ;
    function handleDeleteItem(id){
        setItems((items)=>items.filter((item)=>item.id!==id))
    }
    function handleNewItems(item) {
        setItems((items)=>[...items,item])
    }
    function handleToggleItem(id){
        setItems((items)=>items.map((item)=>id===item.id ? {...item,packed:!item.packed}:item))
    }
    function handleClearList(items){
        setItems([])
    }
    return(
        <div className="app">
            <Logo/>
            <Form onAddNewItems={handleNewItems}/>
            <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} clearList={handleClearList}/>
            <Stats items={items}/>
        </div>
    )
}
function Logo({items}){
    return <h1>🌴 Far Away 💼</h1>
}

