// Write your code here
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import {VaccinationCoverageContainer, Heading} from './styledComponents'

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <VaccinationCoverageContainer>
      <Heading>Vaccination Coverage</Heading>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          width={1000}
          height={300}
          data={last7DaysVaccination}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="vaccineDate"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
              fontFamily: 'Roboto',
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
              fontFamily: 'Roboto',
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
              fontFamily: 'Roboto',
            }}
          />
          <Bar
            dataKey="dose1"
            name="Dose1"
            fill=" #2cc6c6"
            barSize="20%"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="dose2"
            name="Dose2"
            fill="#f54394"
            barSize="20%"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </VaccinationCoverageContainer>
  )
}

export default VaccinationCoverage
