import Countdown from 'react-countdown'

const MintCountdown = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return <>Closed!</>
    } else {
      // Render a countdown
      return (
        <span>
          {days}d {hours}h {minutes}m {seconds}s
        </span>
      )
    }
  }

  return <Countdown date={'2023-01-21T18:30:00.000Z'} renderer={renderer} />
}

export default MintCountdown
