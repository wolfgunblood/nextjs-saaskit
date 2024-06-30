// This sets the page to use the Edge runtime
export const runtime = 'edge';

// Asynchronous function to handle the 404 page
export default async function NotFound() {
    // Here you can include any server-side logic if necessary
    // For instance, fetching data from an API

    // Return the JSX for the 404 page
    return (
        <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "50px" }}>
            <h1>404 - Page Not Found</h1>
            <p>We&apos;re sorry, the page you requested could not be found.</p>
        </div>
    );
}
