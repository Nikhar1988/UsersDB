import React from 'react';
import ReactPaginate from 'react-paginate';
import _ from 'lodash';
import Table from './components/table/table';
import DataBaseService from './services/serviceBD';
import Spinner from './components/spinner/spinner';
import RowViewDetail from './components/rowViewDetail/rowViewDetail';
import ModeSelectedView from './components/modeSelectorView/modeSelectedView';
import TableSearch from './components/tableSearch/tableSearch'
import ImputData, { ShowAddForm } from './components/inputData/imputData';

import './App.css';

export default class App extends React.Component {

  dataBaseService = new DataBaseService();

  state = {
    userData: [],
    loading: false,
    directionSort: true,
    sortField: null,
    row: null,
    modeSelectedView: true,
    currentPage: 0,
    search: '',
    showHideForm: false,
    addPerson: ''
  }

  sortData = (field) => {
    const copyData = this.state.userData.concat();

    const sortData = copyData.sort(
      (a, b) => {
        if (this.state.directionSort) {
          return a[field] > b[field] ? 1 : -1;
        }
        return a[field] > b[field] ? -1 : 1;
      }
    )
    this.setState(state => ({
      directionSort: !state.directionSort,
      sortField: field,
      userData: sortData

    }))
  }

  onRowSelected = (row) => {
    this.setState({ row })

  }

  onSelect = (url) => {

    this.setState({ loading: true })
    this.dataBaseService.getUserData(url)
      .then((userData) => {
        this.setState({
          userData,
          modeSelectedView: false,
          loading: false
        });
      })
  }

  handlePageClick = ({ selected }) => {
    this.setState({ currentPage: selected })
  }

  searchHandler = (search) => {

    this.setState({ search, currentPage: 0 })
  }

  getFilteredData() {
    const { userData, search } = this.state;

    if (!search) {
      return userData;
    }

    return userData.filter(item => {
      return item['firstName'].toLowerCase().includes(search.toLowerCase())
        || item['lastName'].toLowerCase().includes(search.toLowerCase())
        || item['email'].toLowerCase().includes(search.toLowerCase())
        || item['phone'].toLowerCase().includes(search.toLowerCase())
    })
  }


  showHideForm = () => {
    this.setState(state => ({
      showHideForm: !state.showHideForm
    }))
  }

  getInputFormData = (person) => {

    this.setState({ addPerson: person });

  }



  render() {
    console.log('renderApp')
    const { userData, loading, directionSort, sortField, row, modeSelectedView, currentPage, showHideForm, addPerson } = this.state;

    const pageSize = 50;
    const loadView = loading ? <Spinner /> : null

    const filteredData = this.getFilteredData();

    const pageCount = Math.ceil(filteredData.length / pageSize);

    const pogination = userData.length > pageSize ? < ReactPaginate
      previousLabel={'<'}
      nextLabel={'>'}
      breakLabel={'...'}
      breakClassName="page-link"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={this.handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      forcePage={currentPage} /> : null;



    const displayData = _.chunk(filteredData, pageSize)[currentPage]




    if (userData && addPerson && userData.indexOf(addPerson)) {
      console.log(userData.indexOf(addPerson))
      this.setState({ addPerson: false })
      userData.unshift(addPerson);
    }



    const imputData = showHideForm ? <ImputData getInputFormData={this.getInputFormData} /> : null;

    const content = !loading && modeSelectedView ? <ModeSelectedView onSelect={this.onSelect} />
      : <React.Fragment>
        <ShowAddForm showHideForm={this.showHideForm} submitHandler={this.submitHandler} />
        {imputData}
        <TableSearch onSearch={this.searchHandler} />
        <Table
          userData={displayData}
          sortData={this.sortData}
          directionSort={directionSort}
          sortField={sortField}
          onRowSelected={this.onRowSelected} />
      </React.Fragment>


    const rowDetail = row ? <RowViewDetail person={row} /> : null;



    return (
      <>
        <div className="container">
          {content}
          {rowDetail}
          {loadView}
          {pogination}

        </div>
      </>

    );
  }


}


