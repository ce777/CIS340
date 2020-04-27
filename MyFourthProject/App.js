import React from 'react';
import { Text, View, SectionList } from 'react-native';

export default StatesApp = () => {
  return(
    <View style={{flex: 1, paddingTop: 34}}>
      <SectionList 
        sections={[
          {title: 'A: All A States', data: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']},
          {title: 'C: All C States', data: ['California', 'Colorado', 'Conneticut']},
          {title: 'D: All D States', data: ['Delaware']}
        ]}//End of Sections (can add more)
        
        renderItem={({item}) => <Text 
        style=
          {{padding: 20, paddingBottom: 20, paddingTop: 20, 
            fontSize:20, height: 44}}> 
            {item} </Text> }
        
        renderSectionHeader={({section}) => <Text 
            style=
            {{paddingTop: 20, paddingLeft: 4, paddingRight: 4, paddingBottom: 20, 
            fontSize: 17, fontWeight: 'bold',
            backgroundColor: '#FFA500',}}>
              {section.title}</Text>} //set custom color
        
          keyExtractor={(item,index) =>index}
      />
    </View>
  ); //end of return statement
  } 