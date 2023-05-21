import AddQualityPage from "./pages/addQuality";
import EditQualityPage from "./pages/editQuality";
import QualitiesListPage from "./pages/qualititesList";

const routes = [
    { path: "/add", name: "Add", component: AddQualityPage },
    {
        path: "/edit/:id",
        display: false,
        name: "Edit",
        component: EditQualityPage,
    },
    {
        path: "/",
        name: "Qualities List",
        display: false,
        component: QualitiesListPage,
    },
];

export default routes;
