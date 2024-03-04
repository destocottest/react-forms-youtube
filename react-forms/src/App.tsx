// import { BaseForm } from "./components/BaseForm";
// import { QuerySelectorForm } from "./components/QuerySelectorForm";
// import { MultipleStatesForm } from "./components/MultipleStatesForm";
// import { SingleStateForm } from "./components/SingleStateForm";
// import { CustomFormHookForm } from "./components/CustomFormHookForm";
// import { FormDataForm } from "./components/FormDataForm";
// import { FormikForm } from "./components/FormikForm";
// import { FormikComponentsForm } from "./components/FormikComponentForm";
// import { FormikYupValidationForm } from "./components/FormikYupValidationForm";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import { QueryParametersForm } from "./components/QueryParametersForm";
// import { ReactRouterForm } from "./components/ReactRouterForm";
// import { signupAction } from "./actions/signupAction";

// import { LocalStorageForm } from "./components/LocalStorageForm";
// import { MultiPageForm } from "./components/MultiPageForm";
import { RefForm } from "./components/RefForm";

// const router = createBrowserRouter(
//   createRoutesFromElements(<Route path="/" element={<QueryParametersForm />} />)
// );

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<ReactRouterForm />} action={signupAction} />
//   )
// );

const App = () => {
  return (
    <main className="main">
      {/* <BaseForm /> */}
      {/* <QuerySelectorForm /> */}
      {/* <MultipleStatesForm /> */}
      {/* <SingleStateForm /> */}
      {/* <CustomFormHookForm /> */}
      {/* <FormDataForm /> */}
      {/* <FormikForm /> */}
      {/* <FormikComponentsForm /> */}
      {/* <FormikYupValidationForm /> */}
      {/* <RouterProvider router={router} /> */}
      {/* <LocalStorageForm /> */}
      {/* <MultiPageForm /> */}
      <RefForm />
    </main>
  );
};
export default App;
