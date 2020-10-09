import React from 'react';
import { connect } from 'react-redux';
import { Table, Space } from 'antd';
import { LayoutWrapper, RedBtn } from './css';
import {
	getAllData,
	requestDeleteContact,
	requestEditContact,
	requestAddContact
} from './actions';
import {
	EditOutlined,
	DeleteOutlined,
	CheckOutlined,
	CloseOutlined
} from '@ant-design/icons';

class Homepage extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			showAddModal: false,
			formVisible: false,
			id: '',
			name: '',
			address: '',
			showError: false,
			columns : [
		  {
		    title: 'Name',
		    dataIndex: 'name',
		    key: 'name',
		  },
		  {
		    title: 'Address',
		    dataIndex: 'address',
		    key: 'address',
		  },
		  {
		    title: 'Action',
		    key: 'action',
		    render: (id, obj) => (
		      <Space size="middle">
		        <a><EditOutlined onClick={() => this.onEdit(obj)}/></a>
		        <a><DeleteOutlined onClick={() => this.onDelete(obj.id)}/></a>
		      </Space>
		    ),
		  },
		]

		}
	}

	componentDidMount(){
		this.props.getAllData();
	}

	onEdit(obj){
		this.setState({
			...obj,
			formVisible: true
		})
	}

	onDelete(id){
		this.props.requestDeleteContact(id);
	}

	sendRequest = () => {
		let { name, address, id } = this.state;
		if(name == '' || address == ''){
			this.setState({
				showError: true
			})
		}
		else {
			let payload = {
				name,
				address,
				id
			}
			if(id){
				this.props.requestEditContact(payload);
			}
			else {
				this.props.requestAddContact(payload)
			}

			this.setState({
				name: '',
				address: '',
				id: '',
				formVisible: false,
				showError: false
			})
		}
		
	}

	toggle = () => {
		this.setState({
			formVisible: !this.state.formVisible
		})
	}

	onChangeForm = (field, e) => {
		this.setState({
			[field]: e.target.value
		})
	}



	render(){
		let { showAddModal, columns, formVisible, name, address, id, showError} = this.state;

		return (
			<LayoutWrapper>
				<div className='header'>
					<img src='https://i.imgur.com/a9Dxo6e.png' />
				</div>
				<div className='table-list'>
					<div className='title'>
						<label>COVID-19 Contact Tracing</label>
						<RedBtn
							float='right'
							onClick={this.toggle}
						>
							New Contact
						</RedBtn>
					{
						formVisible && (
							<div>
								<div className='form'>
									<input
										type='text'
										hidden
									/>
									<input
										type='text'
										placeholder='Name'
										value={name}
										onChange={this.onChangeForm.bind(this, 'name')}
									/>
									<input
										type='text'
										placeholder='Address'
										value={address}
										onChange={this.onChangeForm.bind(this, 'address')}
									/>
									<CheckOutlined onClick={this.sendRequest} />
									<CloseOutlined onClick={this.toggle} />
								</div>
								{
									showError && (
										<span className='error'>All fields are required</span>
									)
								}
							</div>
						)
					}
					</div>
					<Table
						dataSource={this.props.contacts}
						columns={columns}
					/>;
				</div>
		  </LayoutWrapper>
		)
	}
}

const mapStateToProps = (state) => ({
	contacts: state.contacts
})


export default connect(mapStateToProps, {getAllData, requestEditContact, requestDeleteContact, requestAddContact})(Homepage);