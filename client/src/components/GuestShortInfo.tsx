import moment from 'moment';
import "../styles/GuestShortInfo.css";

type Props = {
    title: string;
    last_name: string;
    first_name: string;
    local_name_spelling: string | undefined;
    date_of_birth: string | undefined;
    company: string | undefined;
    position: string | undefined;
}
const GuestShortInfo: React.FC<Props> = ({ title, last_name, first_name, local_name_spelling, date_of_birth, company, position }) => {
    let dob = moment(date_of_birth).format('YYYY MM DD');
    return (
        <div className="guestShortInfo">
            <p>{title} {last_name}, {first_name}</p>
            {local_name_spelling ? <p>{local_name_spelling}</p> : null}
            
            {date_of_birth ? <p>{dob}</p> : null}
            {position ? <p>{position}</p> : null} {company ? <p> @ {company}</p> : null}
        </div>
    );
}

export default GuestShortInfo;