import React from 'react'
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox';
import FilterTable from './components/FilterTable';
import {Accordion, AccordionItem} from './components/ListView';

//ReactDOM.render(<CommentBox url="/api/comments" />, document.getElementById('app'));
//ReactDOM.render(<FilterTable url="/api/products" />, document.getElementById('productTable'));
//
var data = [
        {
            "id": "84000000000000",
            "name": "Johns",
            "partner_id": "55000000000004",
            "description": "",
            "start_date": "2015-11-19 00:00:00",
            "state": "draft",
            "archived": "0",
            "budget_amount": "0",
            "budget_period": "total",
            "budget_status": "0",
            "budget_low_level": "90",
            "control_group_percentage": "0",
            "date_created": "2015-11-19 19:23:52",
            "date_modified": "2015-11-19 19:25:46",
            "short_code": "CM-0",
            "status": "draft",
            "packages": [
                {
                    "id": "83000000000000",
                    "name": "abc_pk",
                    "description": "sdsd",
                    "cpav": "0",
                    "short_code": "PKG-0",
                    "status": "active",
                    "retailer": {
                        "id": "55000000000004",
                        "name": "Alex and Ani"
                    },
                    "audiences": [
                        {
                            "id": "90000000000000",
                            "targeting": null,
                            "date_created": "2015-11-19 19:25:36",
                            "behavior": "rotation",
                            "creatives": [
                                {
                                    "id": "61000000000000",
                                    "partner_id": "55000000000004",
                                    "partner_name": "Alex and Ani",
                                    "approved": "1",
                                    "title": "ONE",
                                    "description": "",
                                    "thumbnail_image": "9000000000014",
                                    "notification_text": "ONE",
                                    "notification_title": "",
                                    "creator_id": "6000000000000",
                                    "creator_name": "",
                                    "date_changed": "1447961116.5663",
                                    "date_created": "2015-11-19 19:25:01",
                                    "date_modified": "2015-11-19 19:25:19",
                                    "ordinal": "0",
                                    "short_code": "CR-0",
                                    "retailer_approval_state": "approved",
                                    "retailer_approval_creative_date_changed": "0",
                                    "retailer_approval_ui_state": "pending",
                                    "publisher_approvals": []
                                }
                            ]
                        }
                    ],
                    "publishers": [
                        {
                            "id": "55000000000012",
                            "name": "Gilt",
                            "cpv": "0"
                        }
                    ]
                }
            ],
            "tracking_urls": null,
            "day_parting": null,
            "placements": [
                {
                    "name": "Entrance",
                    "campaign_id": "84000000000000"
                },
                {
                    "name": "Accessories",
                    "campaign_id": "84000000000000"
                }
            ],
            "publishers": [
                {
                    "name": "Gilt",
                    "campaign_id": "84000000000000"
                }
            ],
            "locations": [
                {
                    "location_name": "swirl",
                    "campaign_id": "84000000000000"
                }
            ]
        },
        {
            "id": "84000000000001",
            "name": "TWO",
            "partner_id": "55000000000004",
            "description": "",
            "start_date": "2015-11-19 00:00:00",
            "state": "draft",
            "archived": "0",
            "budget_amount": "0",
            "budget_period": "total",
            "budget_status": "0",
            "budget_low_level": "90",
            "control_group_percentage": "0",
            "date_created": "2015-11-19 19:26:07",
            "date_modified": "2015-11-20 19:10:45",
            "short_code": "CM-1",
            "status": "draft",
            "packages": [
                {
                    "id": "83000000000001",
                    "name": "blah",
                    "description": "asasas",
                    "cpav": "0",
                    "short_code": "PKG-1",
                    "status": "active",
                    "retailer": {
                        "id": "55000000000004",
                        "name": "Alex and Ani"
                    },
                    "audiences": [
                        {
                            "id": "90000000000001",
                            "targeting": null,
                            "date_created": "2015-11-19 19:26:32",
                            "behavior": "rotation",
                            "creatives": [
                                {
                                    "id": "61000000000000",
                                    "partner_id": "55000000000004",
                                    "partner_name": "Alex and Ani",
                                    "approved": "1",
                                    "title": "ONE",
                                    "description": "",
                                    "thumbnail_image": "9000000000014",
                                    "notification_text": "ONE",
                                    "notification_title": "",
                                    "creator_id": "6000000000000",
                                    "creator_name": "",
                                    "date_changed": "1447961116.5663",
                                    "date_created": "2015-11-19 19:25:01",
                                    "date_modified": "2015-11-19 19:25:19",
                                    "ordinal": "0",
                                    "short_code": "CR-0",
                                    "retailer_approval_state": "approved",
                                    "retailer_approval_creative_date_changed": "0",
                                    "retailer_approval_ui_state": "pending",
                                    "publisher_approvals": []
                                },
                                {
                                    "id": "61000000000001",
                                    "partner_id": "55000000000004",
                                    "partner_name": "Alex and Ani",
                                    "approved": "0",
                                    "title": "2",
                                    "description": "",
                                    "thumbnail_image": "9000000000016",
                                    "notification_text": "sdd",
                                    "notification_title": "",
                                    "creator_id": "6000000000000",
                                    "creator_name": "",
                                    "date_changed": "1448045465.4384",
                                    "date_created": "2015-11-20 18:50:47",
                                    "date_modified": "2015-11-20 18:51:05",
                                    "ordinal": "1",
                                    "short_code": "CR-1",
                                    "retailer_approval_state": "approved",
                                    "retailer_approval_creative_date_changed": "0",
                                    "retailer_approval_ui_state": "pending",
                                    "publisher_approvals": []
                                },
                                {
                                    "id": "61000000000002",
                                    "partner_id": "55000000000004",
                                    "partner_name": "Alex and Ani",
                                    "approved": "0",
                                    "title": "3",
                                    "description": "",
                                    "thumbnail_image": "9000000000018",
                                    "notification_text": "we",
                                    "notification_title": "",
                                    "creator_id": "6000000000000",
                                    "creator_name": "",
                                    "date_changed": "1448045486.2871",
                                    "date_created": "2015-11-20 18:51:12",
                                    "date_modified": "2015-11-20 18:51:26",
                                    "ordinal": "2",
                                    "short_code": "CR-2",
                                    "retailer_approval_state": "approved",
                                    "retailer_approval_creative_date_changed": "0",
                                    "retailer_approval_ui_state": "pending",
                                    "publisher_approvals": []
                                },
                                {
                                    "id": "61000000000003",
                                    "partner_id": "55000000000004",
                                    "partner_name": "Alex and Ani",
                                    "approved": "0",
                                    "title": "4",
                                    "description": "",
                                    "thumbnail_image": "9000000000020",
                                    "notification_text": "qwe",
                                    "notification_title": "",
                                    "creator_id": "6000000000000",
                                    "creator_name": "",
                                    "date_changed": "1448045505.3014",
                                    "date_created": "2015-11-20 18:51:33",
                                    "date_modified": "2015-11-20 18:51:45",
                                    "ordinal": "3",
                                    "short_code": "CR-3",
                                    "retailer_approval_state": "approved",
                                    "retailer_approval_creative_date_changed": "0",
                                    "retailer_approval_ui_state": "pending",
                                    "publisher_approvals": []
                                }
                            ]
                        }
                    ],
                    "publishers": [
                        {
                            "id": "55000000000012",
                            "name": "Gilt",
                            "cpv": "0"
                        }
                    ]
                }
            ],
            "tracking_urls": null,
            "day_parting": null,
            "placements": [
                {
                    "name": "Full Store",
                    "campaign_id": "84000000000001"
                }
            ],
            "publishers": [
                {
                    "name": "Gilt",
                    "campaign_id": "84000000000001"
                }
            ],
            "locations": [
                {
                    "location_name": "swirl",
                    "campaign_id": "84000000000001"
                }
            ]
        }

];
var openCloseStyle= {
	position: 'relative',
	paddingTop:'14px'
}

var MyListView = React.createClass({
	getInitialState: function (){
			return {data: data, filteredData: data, sorts:{}}
	},
	sortBy: function(key){

		var sortedArray = this.state.data.slice(0);
		var sorts = this.state.sorts;
		if(!sorts[key] ){
			sorts[key] =1;
		} else if(sorts[key] && sorts[key] ==1){
			sorts[key] = -1;
		}
		if(sorts[key] == 1 || sorts[key] == -1){
			sortedArray.sort(function(a, b){
				var isLessThen = a[key] < b[key];
				if(sorts[key] == -1)
					return !isLessThen;

				return isLessThen;
			})
		}else {
			sorts[key] =0;
		}
		var updatedState = {filteredData:sortedArray, sorts: sorts}
		this.setState(updatedState) ;
	},
	createListHeader: function(){
		return(
			<section key={0} className='collapse-card list-head'>
				<div className='collapse-card__heading list-head'>
					<div className="grid">

					<div className="row row-sm">
						<div className="padder" />
						<div className="col heading" onClick={this.sortBy.bind(this, 'id')}> id </div>
						<div className="col heading"> name </div>
						<div className="col heading"> start date </div>
						<div className="col heading"> end date</div>
						<div className="col heading"> labels</div>
						<div className="col heading"> status</div>
					</div>
				</div>
			</div>

			</section>
		)

	},

	createHeader: function(item, isOpen){
		return (
			<div className="grid">

			<div className="row row-sm">
				<div className="open" style={openCloseStyle}>
					{(function(){
						debugger;
						if(isOpen){
							return (<i className="fa fa-minus"></i>);
						}else{
							return (<i className="fa fa-plus"></i>);
						}

					}()
					)}
				</div>
				<div className="col"> {item.short_code} </div>
				<div className="col"> {item.name} </div>
				<div className="col"> {item.start_date} </div>
				<div className="col"> {item.end_date || 'Unlimited'} </div>
				<div className="col"> {item.labels}</div>
				<div className="col"> {item.status}</div>
			</div>

		</div>
		)

	},
	createContent: function(item){
		return (
			<div className="item-content">
				<div className="item-content-main">
					<div className="campaign_info">
						<div className="description-container">
							<label>Description </label><span> {item.description || "none"}</span>
						</div>

						<div className="labels">
							<label>Labels: </label>
							<span className="label-list">
								<span className="label-item">
									label 1
								</span>
								<span className="label-item">
									label 1
								</span>
								<span className="label-item">
									label 1
								</span>
								<span className="label-item">
									label 1
								</span>
							</span>
						</div>
					</div>
					<div className="campaign_actions">
						<div id="activateLink" className="action">
							<span className="fa-stack fa-lg">
							  <i className="fa fa-circle fa-stack-2x"></i>
							  <i className="fa fa-info fa-stack-1x fa-inverse"></i>
							</span>
							<div className="text">Details</div>
						</div>
						<div id="activateLink" className="action">
							<span className="fa-stack fa-lg">
								<i className="fa fa-circle fa-stack-2x"></i>
								<i className="fa fa-play fa-stack-1x fa-inverse"></i>
							</span>
							<div className="text">Activate</div>
						</div>
						<div id="editLink" className="action">
							<span className="fa-stack fa-lg">
								<i className="fa fa-circle fa-stack-2x"></i>
								<i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
							</span>
							<div className="text">Edit</div>
						</div>
						<div id="deleteLink" className="action">
							<span className="fa-stack fa-lg">
								<i className="fa fa-circle fa-stack-2x"></i>
								<i className="fa fa-archive fa-stack-1x fa-inverse"></i>
							</span>
							<div className="text">Archive</div>

							</div>
					</div>

				</div>
				<div className="item-content-foot">
					<div className="budget-info-item">
						<label className="budget-info-label">Budget:</label>
						<span className="budget-info-amount">$1999 (total)</span>
					</div>
					<div className="budget-info-item">
						<label className="budget-info-label">Budget Spend:</label>
						<span className="budget-info-amount">N/A</span>
					</div>
					<div className="budget-info-item">
						<label className="budget-info-label">Campaign Spend:</label>
						<span className="budget-info-amount">$160.00</span>
					</div>
				</div>
			</div>

		);
	},
	render: function (){
		console.log('items',this.state.filteredData);
		return (


			<Accordion
				heading={this.createListHeading}
				itemHeader={this.createHeader}
				itemContent={this.createContent}
				listHeader={this.createListHeader}
				items={this.state.filteredData}
				itemKey="id" >
				<div className="grid">
					<div className="row row-sm">
						<label> Search:
						</label>
						<input type="text" />
					</div>
					<div className="row row-sm">
						<div className="col"> ID </div>
						<div className="col"> Name </div>
						<div className="col"> Start </div>
						<div className="col"> End </div>
						<div className="col"> Labels</div>
						<div className="col"> Status</div>
					</div>
				</div>
			</Accordion>

		);
	}
});





ReactDOM.render(
	<MyListView items={data}/>
, document.getElementById('app'));
