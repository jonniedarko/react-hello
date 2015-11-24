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


var MyListView = React.createClass({

	createHeader: function(item){
		return (
			<div className="grid">

			<div className="row row-sm">
				<div className="col"> {item.short_code} </div>
				<div className="col"> {item.name} </div>
				<div className="col"> {item.start_date} </div>
				<div className="col"> {item.end_date} </div>
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
						<label>Description </label><span> {item.description || "none"}</span>
					</div>
					<div className="campaign_actions">
						<a id="activateLink" className="action">
							<div className="circle play"></div>
							<div className="text">Activate</div>
						</a>
						<a id="editLink" className="action">
							<div className="circle edit"></div>
							<div className="text">Edit</div>
						</a>
						<a id="deleteLink" className="action">
							<div className="circle archive"></div>
							<div className="text">Archive</div>

							</a>
					</div>

				</div>
				<div className="item-content-foot">
					Blah
				</div>
			</div>

		);
	},
	render: function (){



		return (


			<Accordion
				heading={this.createListHeading}
				itemHeader={this.createHeader}
				itemContent={this.createContent}
				items={data}
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
