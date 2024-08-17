<div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '30%', backgroundColor: '#f4f4f4', padding: '10px' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tabs.map(tab => (
            <li key={tab.name} style={{ marginBottom: '10px' }}>
              <button
                onClick={() => setActiveTab(tab.name)}
                style={{
                  backgroundColor: activeTab === tab.name ? '#ddd' : '#fff',
                  border: '1px solid #ccc',
                  padding: '10px',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ width: '70%', padding: '20px' }}>
        <h1 className="text-black">{activeTab}</h1>
        <p className="text-black">{renderContent()}</p>
      </div>
    </div>