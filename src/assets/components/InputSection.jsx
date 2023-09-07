const InputSection = ({taskList, setTaskList}) => {

  let newItem = {
    title:'',
    count:'',
    unit:'',
  }

  const units = [{
    value:'',
    text:'',
  },{
    value:'kg',
    text:'Kg',
  },{
    value:'gr',
    text:'Gr',
  },{
    value:'mg',
    text:'Mg',
  },{
    value:'lt',
    text:'Lt',
  },{
    value:'ml',
    text:'Ml',
  },{
    value:'pcs',
    text:'Pcs',
  },]

  function itemNameHandler(event) {
    newItem.title = event.target.value
  }

  function itemCountHandler(event) {
    newItem.count = event.target.value
  }

  function itemUnitHandelr(event) {
    newItem.unit = units[event.target.selectedIndex].text
  }

  function createNewItem() {
    if(newItem.title=='' && taskList.length>0) {
      newItem.title = taskList[taskList.length-1].title
    }
    if(newItem.count=='' && taskList.length>0) {
      newItem.count = taskList[taskList.length-1].count
    }
    if(newItem.unit=='' && taskList.length>0) {
      newItem.unit = taskList[taskList.length-1].unit
    }

    if(newItem.title!='') {
      setTaskList([...taskList, newItem])
    }
    
  }
  return (
    <section className="input-section">
      <div className="input">
        <h5>Item</h5>
        <input type="text" onChange={itemNameHandler}/>
      </div>
      <div className="count-dropdown">
        <h5>Count</h5>
        <div className="count">
          <input type="text" onChange={itemCountHandler}/>
          <select
          onClick={itemUnitHandelr}
            className="section-select"
            name="count-select"
            id="count-select-id"
          >
            {units.map((obj,index)=>(<option key={index} value={obj.value}>{obj.text}</option>))}
          </select>
        </div>
      </div>
      <button className="add-product-button" onClick={createNewItem}>+</button>
    </section>
  );
};

export default InputSection;
