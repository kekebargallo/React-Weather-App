import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import './forecast.styles.css';

const WEEK_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function Forecast({data}) {

    const dayInAWeek = new Date().getDay() - 1;

    const nextDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))

    let forecastWeekDays = []

    for(let i = 0; i <= 4; i++){
        forecastWeekDays.push(data.list[2+i*8])
    }

  return (
    <>
        <label className='title'>Daily</label>
        <Accordion allowZeroExpanded>
            {forecastWeekDays.map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className='dailyItem'>
                                <img alt='weather' className='iconSmall' src={`icons/${item.weather[0].icon}.png`}/>
                                <label className='day'>{nextDays[idx]}</label>
                                <label className='description'>{item.weather[0].description}</label>
                                <label className='min-max'>{Math.round(item.main.temp_max)}°C / {Math.round(item.main.temp_min)}°C</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className='dailyDetailsGrid'>
                            <div className='dailyDetailsGridItem'>
                                <label>Pressure:</label>
                                <label>{item.main.pressure} hPa</label>
                            </div>
                            <div className='dailyDetailsGridItem'>
                                <label>Humidity:</label>
                                <label>{item.main.humidity}%</label>
                            </div>
                            <div className='dailyDetailsGridItem'>
                                <label>Clouds:</label>
                                <label>{item.clouds.all}</label>
                            </div>
                            <div className='dailyDetailsGridItem'>
                                <label>Wind speed:</label>
                                <label>{item.wind.speed} m/s</label>
                            </div>
                            <div className='dailyDetailsGridItem'>
                                <label>Sea level:</label>
                                <label>{item.main.sea_level}m</label>
                            </div>
                            <div className='dailyDetailsGridItem'>
                                <label>Feels like:</label>
                                <label>{Math.round(item.main.feels_like)}°C</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
                
            ))}
        </Accordion>
    </>
  )
}

export default Forecast;