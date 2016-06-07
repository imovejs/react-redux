import React from 'react'
import SearchBar from '../components/searchBar'
import Content from '../components/content'
import Footer from '../components/footer'

import MgForm  from '../components/form';
import { connect } from 'react-redux'
import ImmutableRenderMixin from 'react-immutable-render-mixin'
import * as ItemsActions from '../actions'
import { bindActionCreators } from 'redux'

console.log(ImmutableRenderMixin);

let App = React.createClass({
    getInitialState(){
       //console.log(this.props.items)
        return {};
    },
    mixins: [ImmutableRenderMixin],
    propTypes: {
        items: React.PropTypes.object,
        filter: React.PropTypes.string
    },
    componentDidMount:function(){
        var Thunk=function(fn){
            return function(){
                var args=Array.prototype.slice.call(arguments);
                return function(callback){
                    args.push(callback);
                    return fn.apply(this, args);
                }
            }
        }
        var test=function(keys,callback){
            console.log(keys + '__' + arguments.length);
        }

        var refThunk=Thunk(test); 

        refThunk('this is Thunk Function')(function(e,a){
            console.log(e,a);
        });


        fetch('http://p0.meituan.net/deal/1b5a3dd4d26294b7107d43c222a0bb6f152046.jpg').then(function(response){ 
          
            return response.blob();
        }).then(function(imagesBlob){  
           // console.log(imagesBlob);

          //  console.log(URL.createObjectURL(imagesBlob));
            
            var img=document.querySelector(".images");
            img.src= URL.createObjectURL(imagesBlob);
            img.width=200;
            img.height=200;
           // document.querySelectorAll("img")[0].src= URL.createObjectURL(imagesBlob);
           // document.getElementById("img").src= ""+URL.createObjectURL(imagesBlob)+"";
        });
    },
    render() {
        let styles = {
            width: '600px',
            margin: '30px auto 0'
        }
        const actions = this.props.actions
       // console.log(this.props.items.toArray()); 
        return (
            <div style={styles}> 
                <h2>Manage Items</h2>
                <img id="img" className="images" src="" alt="图片 " />
                <hr />
                <MgForm />
                <hr />
                <SearchBar filterItem={actions.filterItem}/>
                <Content items={this.props.items} filter={this.props.filter} deleteItem={actions.deleteItem}/>
                <Footer addItem={actions.addItem} deleteAll={actions.deleteAll}/> 
            </div>
        )
    }})

/*export default connect( (state) => ({
    items: state.items,
    filter: state.filter
}), dispatch => ({ 
    actions: bindActionCreators(ItemsActions, dispatch)
}))(App)
*/

export default connect(function(state){
    return {
        items: state.items,
        filter: state.filter
    }
},function(dispatch){
    return {
         actions: bindActionCreators(ItemsActions, dispatch)
    }
})(App); 