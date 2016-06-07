import React, { Component } from 'react';


class MgForm extends Component {
	submitClick:function(){
		
	},
	render(){
		return (
			<div className="pure-form">
				<div className="form-control">
					名称:<input type="text" placeholder="名称"/>
					code:<input type="text" placeholder="code"/>
				</div>
				<div className="form-control">
					<label htmlFor="checkbox1"><input id="checkbox1" type="checkbox" />苹果</label>
					<label htmlFor="checkbox2"><input id="checkbox2" type="checkbox" />香蕉</label>
					<label htmlFor="checkbox3"><input id="checkbox3" type="checkbox" />荔枝</label>
				</div>
				<div className="form-control">
					<label htmlFor=""><input type="radio" name="sex" defaultChecked />男</label>
					<label htmlFor=""><input type="radio" name="sex"  />女</label>
				</div>
				<div className="form-control">
					<select name="select" id="">
						<option value="1">中国</option>
						<option value="2">美国</option>
						<option value="3">英国</option>
						<option value="4">澳大利亚</option>
					</select>
				</div>
				<div>
					<button className="pure-button button-success button-small" onClick={this.submitClick}>提交</button>
				</div>
			</div>
		);
	}
}


export default MgForm;