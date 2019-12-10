import React from 'react';
import RecipeReviewCard from "../CardFeed/CardFeed";
import Box from '@material-ui/core/Box';
import MenuTags from '../MenuTags/index';

function Boxfunction(){
    return(
        <div style={{ width: '100%' }}>
        <Box display="flex" flexDirection="row" p={1} m={1}>
            < MenuTags />
        </Box>
        <Box display="flex" flexDirection="row-reverse" p={1} m={1} ClassName="Card">
        <div style={{ width: '100%' }}>

      <Box
        display="flex" 
        flexWrap="nowrap"
        p={1}
        m={1}
      
        css={{ maxWidth:2000 }}
      >
        <Box p={1} >
            <RecipeReviewCard />
        </Box>
        <Box p={1} >
            <RecipeReviewCard />
        </Box>
        <Box p={1} >
            <RecipeReviewCard /> 
        </Box>
        <Box p={1} >    
        </Box>

        </Box>
        <Box
          display="flex"
          flexWrap="nowrap"
          p={1}
          m={1}

          css={{ maxWidth:2000 }}
        >
            <Box p={1} >
                <RecipeReviewCard />
            </Box>

            <Box p={1} >
                <RecipeReviewCard />
            </Box>

            <Box p={1} >
              <RecipeReviewCard /> 
            </Box>

            <Box p={1} >    
            </Box>
          </Box>
        </div>
  
      </Box>
    </div>
    )

}

export default Boxfunction;