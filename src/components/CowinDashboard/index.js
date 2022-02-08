// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import {
  CowinDashboardContainer,
  Logo,
  NavContainer,
  Heading,
  FailureViewContainer,
  FailureImage,
  HeadingFailure,
} from './styledComponents'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: '  FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CowinDashboard extends Component {
  state = {data: {}, apiStatus: apiStatusConstant.initial}

  componentDidMount = () => {
    this.getUserData()
  }

  getUserData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const option = {method: 'GET'}

    const response = await fetch(apiUrl, option)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      updatedData.last7DaysVaccination = updatedData.last7DaysVaccination.map(
        eachData => ({
          vaccineDate: eachData.vaccine_date,
          dose1: eachData.dose_1,
          dose2: eachData.dose_2,
        }),
      )
      console.log(updatedData)
      this.setState({apiStatus: apiStatusConstant.success, data: updatedData})
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderResult = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.inProgress:
        return this.renderLoader()
      case apiStatusConstant.success:
        return this.renderSuccess()
      case apiStatusConstant.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailure = () => (
    <FailureViewContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <HeadingFailure>Something went wrong</HeadingFailure>
    </FailureViewContainer>
  )

  renderSuccess = () => {
    const {data} = this.state
    console.log(data)
    const {last7DaysVaccination} = data
    const {vaccinationByAge} = data
    const {vaccinationByGender} = data
    console.log(vaccinationByAge)

    return (
      <div>
        <VaccinationCoverage last7DaysVaccination={last7DaysVaccination} />
        <VaccinationByGender vaccinationByGender={vaccinationByGender} />
        <VaccinationByAge vaccinationByAge={vaccinationByAge} />
      </div>
    )
  }

  render() {
    return (
      <CowinDashboardContainer>
        <NavContainer>
          <Logo
            className="website-logo"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <Heading>Co-WIN</Heading>
        </NavContainer>
        <h1>CoWIN Vaccination in India</h1>
        {this.renderResult()}
      </CowinDashboardContainer>
    )
  }
}

export default CowinDashboard
