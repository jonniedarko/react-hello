import React from 'react'

var ListViewtable = React.createClass({
	getInitialState: function(){
		return {

		}
	},

	render: function(){
		return (
			<table cellpadding="0" cellspacing="0" class="tbl-accordion">
			  <thead>
			    <tr>
			      <th>Vehicle VIN / Mod</th>
			      <th>Last modified</th>
			      <th>No. of parts</th>
			    </tr>
			  </thead>
			  <tbody>
			    <tr>
			      <td colspan="3">
			        <table cellpadding="0" cellspacing="0" class="tbl-accordion-nested">
			          <thead>
			            <tr>
			              <td colspan="3" class="tbl-accordion-section">Lorem ipsum dolor sit ament lorem ipsum dolor sit ament</td>
			            </tr>
			          <thead>
			          <tbody>
			            <tr>
			              <td>Lorem ipsum dolor sit ament</td>
			              <td>&#10004;</td>
			              <td>&#10004;</td>
			            </tr>
			            <tr>
			              <td>Lorem ipsum dolor sit ament</td>
			              <td>&#10004;</td>
			              <td>&#10004;</td>
			            </tr>
			            <tr>
			              <td>Lorem ipsum dolor sit ament</td>
			              <td>&#10004;</td>
			              <td>&#10004;</td>
			            </tr>
			            <tr>
			              <td>Lorem ipsum dolor sit ament</td>
			              <td>&#10004;</td>
			              <td>&#10004;</td>
			            </tr>
			          </tbody>
			        </table>
			      </td>
			    </tr>
			    <tr>
			      <td colspan="3">
			        <table cellpadding="0" cellspacing="0" class="tbl-accordion-nested">
			          <tbody>
			            <tr>
			              <td colspan="3" class="tbl-accordion-section">Lorem ipsum dolor sit ament lorem ipsum dolor sit ament</td>
			            </tr>
			            <tr>
			              <td>Lorem ipsum dolor sit ament</td>
			              <td>&#10004;</td>
			              <td>&#10004;</td>
			            </tr>
			            <tr>
			              <td>Lorem ipsum dolor sit ament</td>
			              <td>&#10004;</td>
			              <td>&#10004;</td>
			            </tr>
			            <tr>
			              <td>Lorem ipsum dolor sit ament</td>
			              <td>&#10004;</td>
			              <td>&#10004;</td>
			            </tr>
			            <tr>
			              <td>Lorem ipsum dolor sit ament</td>
			              <td>&#10004;</td>
			              <td>&#10004;</td>
			            </tr>
			          </tbody>
			        </table>
			      </td>
			    </tr>
			  </tbody>
			</table>
		)
	}
})
