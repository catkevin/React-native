import React,{Component} from 'react';
import {
   FlatList,
   Text,
   Image,
} from 'react-native'
import SuggestionListLayout from "../components/suggestion-list-layout";
import Empty from "../components/empty";
import Separator from "../components/vertical-separator";
import Suggestion from "../components/suggestion";

class SuggestionList extends Component{
   renderEmpty   = () =><Empty text="No hay Sugerencias" />;
   itemSeparator = () =><Separator />;
   renderItem = ({item}) =>{
     return(
         <Suggestion {...item}/>
     )
   };

   render(){
      const {list} = this.props;
      return(
          <SuggestionListLayout title="Recomendado para ti">
             <FlatList
                 data={list}
                 ListEmptyComponent={this.renderEmpty}
                 ItemSeparatorComponent={this.itemSeparator}
                 renderItem={this.renderItem}
                 keyExtractor={(item) => item.id.toString()}
             />
          </SuggestionListLayout>
      )
   }
}

export default SuggestionList;