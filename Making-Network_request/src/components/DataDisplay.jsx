function DataDisplay({ data}) {
    return (
      <div style={{
        border: '1px solid black',
        padding: '10px',
        margin: '10px'
      }}>
        {data.length > 0 ? (
            data.map(item =>(
                <div key={item.id}>
                <h3>{item.id}</h3>
                <p>{item.title}</p>
                <p>{item.body}</p>
                </div>
            ))
        
        ) : (
          <p>No data to display</p>
        )
        }
      </div>
    );
  }
  
  export default DataDisplay;
  