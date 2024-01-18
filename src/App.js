import {lazy, Suspense, useEffect} from "react";
import "./assets/scss/main.scss";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import "slick-carousel/slick/slick.css";
import Loader from "./container/Loader";
import {
    AboutChamber,
    AboutNetwork,
    AboutOffice,
    AboutPrezident,
    AmchamHistoriy,
    Boards,
    SingleBoard,
} from "./pages/About";
import Header from "./container/Header";
import ChairModal from "./container/ChairModal";
import Prezident from "./pages/About/Prezident";
import Mixers from "./pages/Mixers/Mixers";
import Mixer from "./pages/Mixers/Mixer";

const Footer = lazy(() => import('./container/Footer'));
const Error = lazy(() => import('./pages/Error'));
const Publication = lazy(() => import('./pages/publications'));
const Committees = lazy(() => import('./pages/Committees'));
const Exhibitions = lazy(() => import('./pages/Exhibitons'));
const SingleCommittees = lazy(() => import('./pages/SingleCommittees'));
const Contact = lazy(() => import('./pages/Contact'));
const UsefulInformations = lazy(() => import('./pages/Informations/UsefulInformations'));
const Home = lazy(() => import('./pages/Home'));
const News = lazy(() => import('./pages/News'));
const New = lazy(() => import('./pages/New'));
const Event = lazy(() => import('./pages/Event'));
const InnerMembership = lazy(() => import('./pages/InnerMembership'));
const Membership = lazy(() => import('./pages/Membership'));
const Member2Member = lazy(() => import('./pages/Member2Member/Member2Member'));
const SectorMembership = lazy(() => import('./pages/SectorMembership/SectorMembership'));
const Login = lazy(() => import('./container/Login'));
const JoinUs = lazy(() => import('./pages/JoinUs'));
const Account = lazy(() => import('./pages/Account'));
const Register = lazy(() => import('./pages/Registration/Registration'));
const Form = lazy(() => import('./components/Form/Form'));
const Calendar = lazy(() => import('./container/Calendar'));
const Business = lazy(() => import('./pages/Business'));
const Events = lazy(() => import('./pages/Events'));
const CommitteesZone = lazy(() => import('./pages/CommitteesZone'));
const AddEvent = lazy(() => import('./container/AddEvent'));
const SingleEvent = lazy(() => import('./container/NewEvent'));
const CommitteeSettings = lazy(() => import('./container/CommitteeSettings'));
const AddNewEvent = lazy(() => import('./container/AddNewEvent'));

const ScrollTop = () => {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        console.clear();
    }, [pathname]);
    return null;
};

function App() {
    const system = useSelector(state => state.system);
    const token = useSelector(state => state.auth.chair_token);
    const userToken = useSelector(state => state.auth.user_token);

    return (
        <>
            <Header/>
            {system.modal ? <Login/> : null}
            {system.chairModal && <ChairModal/>}
            <Suspense fallback={<Loader size={100}/>}>
                <div className="App">
                    <ScrollTop/>
                    <Routes>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/strategy" element={<Business/>}/>
                        <Route path="/boards/singleBoard/:id" element={<SingleBoard/>}/>
                        <Route path="/boards" element={<Boards/>}/>
                        <Route path="/history" element={<AmchamHistoriy/>}/>
                        <Route path="/network" element={<AboutNetwork/>}/>
                        <Route path="/news/:id" element={<New/>}/>
                        <Route path="/events/:id" element={<Event/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/events" element={<Events/>}/>
                        <Route path="/chamber" element={<AboutChamber/>}/>
                        <Route path="/useful-information" element={<UsefulInformations/>}/>
                        <Route path="/staff" element={<AboutOffice/>}/>
                        <Route path="/committees/:id" element={<SingleCommittees/>}/>
                        <Route path="/committees" element={<Committees/>}/>
                        <Route path="/president/:id" element={<Prezident/>}/>
                        {
                            token &&
                            <Route path="committees-zone" element={<CommitteesZone/>}>
                                <Route path="/committees-zone/all" element={<AddEvent/>}/>
                                <Route path="all/edit/:id" element={<SingleEvent/>}/>
                                <Route path="settings" element={<CommitteeSettings/>}/>
                                <Route path="new" element={<AddNewEvent/>}/>
                            </Route>
                        }
                        <Route path="/join-us" element={<JoinUs/>}/>
                        <Route path="/membership/:id" element={<InnerMembership/>}/>
                        <Route path="/membership" element={<Membership/>}/>
                        <Route path="/bussiness-mixers" element={<Mixers/>}/>
                        <Route path="/bussiness-mixers/:id" element={<Mixer/>}/>
                        <Route path="/member2member" element={<Member2Member/>}/>
                        <Route path="/member-sector" element={<SectorMembership/>}/>
                        <Route path="/publications" element={<Publication/>}/>
                        <Route path="/business" element={<AboutPrezident/>}/>
                        <Route path="/exhibitions" element={<Exhibitions/>}/>
                        <Route path="/account" element={userToken ? <Account/> : <Navigate to="/"/>}/>
                        <Route path="/form" element={<Form/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/calendar" element={<Calendar/>}/>
                        <Route path="*" element={<Navigate to={"/"}/>}/>
                    </Routes>
                </div>
                <Footer/>
            </Suspense>
        </>
    );
}

export default App;
