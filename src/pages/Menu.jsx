import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Menu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTabContent = () => {
    switch (value) {
      case 0:
        return <div>Content for Item One</div>;
      case 1:
        return <div>Content for Item Two</div>;
      case 2:
        return <div>Content for Item Three</div>;
      case 3:
        return <div>Content for Item Four</div>;
      case 4:
        return <div>Content for Item Five</div>;
      case 5:
        return <div>Content for Item Six</div>;
      // case 6:
      //   return <div>Content for Item Seven</div>;
      default:
        return null;
    }
  };

  return (
    <div style={{backgroundColor: 'black', color: 'white'}}>
    <div className="container">
      <div className="row">
        <div className="col-9">
        <Box sx={{color: 'background.paper' }}
        // sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab className='tab' label="everyday value" />
            <Tab className='tab' label="Ala-Carte-&-Combos" />
            <Tab className='tab' label="Signature-Boxes" />
            <Tab className='tab' label="Sharing" />
            <Tab className='tab' label="Snacks-&-Beverages" />
            <Tab className='tab' label="Midnight (Start at 12 am)" />
            {/* <Tab className='tab' label="Item Seven" /> */}
          </Tabs>
          <div>{renderTabContent()}</div>
        </Box>
        </div>
        <div className="col-3">asdasd</div>
      </div>
    </div>
    </div>
   
  );
}

export default Menu;
