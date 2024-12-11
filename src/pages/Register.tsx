import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Register = () => {
    const [searchParams] = useSearchParams();
    const [formData, setFormData] = useState({
        name: searchParams.get("name") || "",
        phoneNumber: searchParams.get("phone") || "",
        upiId: "",
    });
    const [qrImage, setQrImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setQrImage(file);

            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }

            setPreviewUrl(URL.createObjectURL(file));

            setTimeout(() => {
                document.getElementById('qr-preview')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 100);
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData, qrImage);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center gap-10 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Register Account
                    </h2>
                </div>
                <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm ">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                required
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="upiId" className="block text-sm font-medium text-gray-700">
                                UPI ID
                            </label>
                            <input
                                id="upiId"
                                name="upiId"
                                type="text"
                                required
                                value={formData.upiId}
                                onChange={handleInputChange}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="qrImage" className="block text-sm font-medium text-gray-700">
                                UPI QR Image
                            </label>
                            <input
                                id="qrImage"
                                name="qrImage"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
            {previewUrl && (
                <div id="qr-preview" className="mt-2">
                    <img
                        src={previewUrl}
                        alt="QR Preview"
                        className="max-w-xs mx-auto"
                    />
                </div>
            )}
        </div>
    );
};