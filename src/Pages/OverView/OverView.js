import '../../Style/OverView.css';
import '../../App.css';
import OverViewData from './data.json';
import SenSorCard from '../../Component/SenSorCard';
import ContentsHeader from '../../Component/ContentsHeader';

function OverView(props) {
    const Arr = OverViewData.OverViewData;


    return (
        <div className='contents-view'>
            <ContentsHeader title="OverView" data="Overview test" useEdit={true}/>
            <div id='card-container'>
                <div className="my-grid">
                    {
                        Arr.map((data, index) => {
                            return (
                                // <SensorCard data={data} size="card-large" key={index}/>
                                // <BarChartCard data={data} size="card-large" key={index}/>
                                <div className='grid-item' key={index}> 
                                    <SenSorCard data={data.data}/>
                                </div>
                            );   
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default OverView;