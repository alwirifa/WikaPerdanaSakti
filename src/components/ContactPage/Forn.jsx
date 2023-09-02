import React from "react";

const Forn = () => {
  return (
    <form className="py-16 px-4 sm:px-6 lg:px-48 max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold text-center p-8">Contact</h1>
      <div className="space-y-8 mt-10">
        <div className="border-b border-gray-900/10 pb-8">
          <h2 className="text-lg font-semibold leading-6 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold leading-6 text-gray-900">
              Company Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Please provide your company's address where mail can be received.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="company-name"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Company Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company-name"
                    id="company-name"
                    autoComplete="organization"
                    className="outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="business-sector"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Business Sector
                </label>
                <div className="mt-1">
                  <select
                    id="business-sector"
                    name="business-sector"
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option>Exporter</option>
                    <option>Trading</option>
                    <option>Manufacturing</option>
                    <option>Personal</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="company-address"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Company Address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company-address"
                    id="company-address"
                    autoComplete="street-address"
                    className="outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="company-city"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company-city"
                    id="company-city"
                    autoComplete="address-level1"
                    className="outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="company-zip"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  ZIP / Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company-zip"
                    id="company-zip"
                    autoComplete="postal-code"
                    className="outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold leading-6 text-gray-900">
              Requirements
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Please specify the quantity and type you need for your request.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="product"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Products
                </label>
                <div className="mt-1">
                  <select
                    id="product"
                    name="product"
                    autoComplete="product"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option>Product 1</option>
                    <option>Product 2</option>
                    <option>Product 3</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="product-type"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Type
                </label>
                <div className="mt-1">
                  <select
                    id="product-type"
                    name="product-type"
                    autoComplete="product-type"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option>Type 1</option>
                    <option>Type 2</option>
                    <option>Type 3</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Quantity
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    autoComplete="quantity"
                    className="outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-gray-900">
              Your Message
            </label>
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={3}
                className="outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              * <span className="text-primary">0</span> - 500 characters
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              * Do not include any personal information in your message.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-end gap-4">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Save
        </button>
      </div>
    </form>
  );
};

export default Forn;
