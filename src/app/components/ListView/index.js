import React from 'react'

const styles = {

	active: {
		//display: 'inherit'
		overflow: 'hidden',
		maxHeight : '0',
		padding: '10px',
		paddingTop: '0',
		paddingBottom: '0',
		marginTop : '0',
		marginBottom: '0',
		transitionDuration: "0.3s",
		transitionTimingFunction: "cubic-bezier(0, 1, 0.5, 1)"
	},
	inactive: {
		//display:  'none'
		padding: '10px',
		transitionDuration: "0.3s",

	    transitionTimingFunction: "ease-in",
	    maxHeight: "500px",
	    overflow: "hidden",

	}

}
export class AccordionItem extends React.Component{
	constructor(){
		super();
		this.state = {
			active: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle(){
		this.setState({
			active: !this.state.active
		})
	}

	render() {
		const itemHeader = this.props.itemHeader;
		const itemContent = this.props.itemContent;
		const item = this.props.item;
		const stateStyle = this.state.active ?
							styles.active : styles.inactive;

		return (
			<section className={this.state.active ? 'collapse-card active': 'collapse-card'}>
				<div className={this.state.active ? 'collapse-card__heading active': 'collapse-card__heading'} onClick={this.toggle}>

						  {itemHeader(item, this.state.active)}
				{ item.error ?
				  (<div className="indicator">
					  !
				  </div>)
				  : null }
				</div>
				<div className={this.state.active ? "collapse-card__body show" :"collapse-card__body hide" } >
					{itemContent(item)}
				</div>

			</section>
		)
	}
}
AccordionItem.proTyps ={
	itemHeader: React.PropTypes.func.isRequired,
	itemContent: React.PropTypes.func.isRequired
};

export class Accordion extends React.Component{
	constructor(){
		super();
		this.state = {
			active: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle(){
		this.setState({
			active: !this.state.active
		});
	}

	render() {
		const items = this.props.items;
		const createListHeader = this.props.listHeader;
		const createItemHeader = this.props.itemHeader;
		const createItemContent = this.props.itemContent;
		const createHeader = this.props.heading;
		const key = this.props.itemKey;
		const stateStyle = this.state.active ?
							styles.active : styles.inactive

		let AccordionItems = []
		if(createListHeader){
			AccordionItems.push(createListHeader());
		}

		items.forEach(function(item, index){
			var offset = createListHeader ? 1: 0
			var itemKey = item[key] ? item[key] + offset : index + offset;
			AccordionItems.push(<AccordionItem item={item} key={itemKey} itemHeader={createItemHeader} itemContent={createItemContent}/>)
		})

		return (
			<div className="accordion">
				{AccordionItems}
			</div>
		)
	}
}
Accordion.proTyps ={
	items: React.PropTypes.array.isRequired,
	itemHeader: React.PropTypes.func.isRequired,
	itemContent: React.PropTypes.func.isRequired
};
