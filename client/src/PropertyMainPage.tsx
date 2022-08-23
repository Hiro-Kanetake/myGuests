import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GuestShortInfo from './components/GuestShortInfo'

const PROPERTY_ID = Number(localStorage.getItem("property_id"));
const ACCOUNT_ID = Number(localStorage.getItem("account_id"));

//TODO setup the DB_URL to switch automatically depending on the environment
const DB_URL = "https://myguests-server.herokuapp.com";
// const DB_URL = "http://localhost:8080";

const TopPage: React.FC = () => {
    const navigate = useNavigate();
    const [allGuests, setAllGuests] = useState<
    {
        title: string;
        last_name: string;
        first_name: string;
        local_name_spelling: string | undefined;
        date_of_birth: string | undefined;
        company: string | undefined;
        position: string | undefined;
    }[]
    >([]);

    const [propertyName, setPropertyName] = useState<string>();

    useEffect(() => {
        const propertyId = {
            params: {
                id: PROPERTY_ID,
            }
        }
        axios.get(`${DB_URL}/property`, propertyId).then((res) => {
            setPropertyName(res.data.name);
        })
    }, [])

    useEffect(() => {
        const viewCrediential = {
            params: {
                property_id: PROPERTY_ID,
                account_id: ACCOUNT_ID
            }
        }
        axios.get(`${DB_URL}/guest`, viewCrediential).then((res) => {
            if (res.data.length > allGuests.length) {
                let lastIndex = allGuests.length;
                setAllGuests((prevGuest) => [...prevGuest, res.data[lastIndex]]);
            }
        }).catch((error) => {
            console.log(error.response.data);
        });
    }, [allGuests])

    return (
        <div>
            <button onClick={(e) => {
                e.preventDefault();
                localStorage.setItem("property_id", "");
                localStorage.setItem("account_id", "");
                navigate("/")
            }}>Logout</button>

            <h1>{propertyName}</h1>

            <button onClick={(e) => {
                e.preventDefault();
                navigate("/addGuest")
            }}>Add Guest</button>
            
            {allGuests.sort((a, b) => {
                const nameA = a.last_name.toUpperCase();
                const nameB = b.last_name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }).map((guest) => {
                return <GuestShortInfo { ...guest }/>
            })}
            
        </div>
    )
}

export default TopPage;