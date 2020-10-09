import styled, { css } from 'styled-components';

const RedBG = '#DD3728';
const DisabledBtn = '#eb6e63';
const fontSize = css`
	font-size: 13px;
`;

export const RedBtn = styled.button`
	background-color: ${RedBG};
	border-radius: 5px;
	color: white;
	width: ${props => props.width ? props.width : 'fit-content'};
	padding: 5px 15px;
	cursor: pointer;
	float: ${props => props.float};
	margin: 0px 0px 0px 10px;
	border: none;
	height: 32px;
	${fontSize}

	&:disabled {
		cursor: not-allowed;
		background-color: ${DisabledBtn};
	}
`;

export const LayoutWrapper = styled.div`

	.header {
		height: 50px;
		background-color: ${RedBG};
		color: white;
		display: inline-flex;
		width: 100%;

		img {
			width: 60px;
			margin: 10px 50px 10px 20px;
		}
	}

	.table-list {
		width: 80%;
		margin: auto;
		margin-top: 30px;

		.title {
			margin-bottom: 30px;
		}
	}

	.anticon {
		font-size: 20px;
    color: blue;
    margin-right: 20px;
	}

	.error {
		color: red;
	}

	.form {
		margin-top: 30px;

		input {
			border: 1px solid #ececec;
	    padding: 5px;
	    border-radius: 4px;
	    width: 30%;
	    margin-right: 10px;
		}

		input:nth-child(3){
			width: 60%;
		}
	}

	.ant-table {
		table {
			text-align: center;
		}

		th {
			text-align: center;
		}
	}
`;
