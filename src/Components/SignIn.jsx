import { useState } from 'react';

const SignIn = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [email, setEmail] = useState(''); 

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setPasswordMatchError("Passwords don't match.");
    } else {
      setPasswordMatchError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setPasswordMatchError("Passwords don't match.");
    } else {
      setPasswordMatchError('');
    }
  };

  const toggleForm = (e) => {
    e.preventDefault(); // Prevents default form submission behavior
    setIsRegistering(!isRegistering);
    setPassword('');
    setConfirmPassword('');
    setPasswordMatchError('');
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <section className="bg-white">
      <div className="mt-10 lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="/im3.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-2xl font-bold text-blue-500 sm:text-3xl md:text-4xl">
              Welcome to ArtConnect
            </h2>
            <p className="mt-4 leading-relaxed text-cyan-100 reduced-word-spacing">
              ArtConnect is a platform designed to bridge designers and customers, allowing them to create,
              share, and purchase unique designs. Designers on the platform can create accounts, log in,
              and access a personal dashboard where they can fill out details like country, language, shop name,
              and upload product images.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="text-2xl font-bold sm:text-3xl">
              {isRegistering ? 'Create an account' : 'Log in to your account'}
            </h1>

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {isRegistering ? (
                  <>
                    <div>
                      <label className="block text-sm font-medium" htmlFor="firstName">First Name</label>
                      <input
                        className="w-full rounded-lg bg-orange-50 border-gray-200 p-3 text-sm"
                        placeholder="First Name"
                        type="text"
                        id="firstName"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium" htmlFor="lastName">Last Name</label>
                      <input
                        className="w-full bg-orange-50 rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Last Name"
                        type="text"
                        id="lastName"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium" htmlFor="email">Email</label>
                      <input
                        className="w-full rounded-lg bg-orange-50 border-gray-200 p-3 text-sm"
                        placeholder="Email"
                        type="email" 
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className=" text-sm font-medium" htmlFor="password">Password</label>
                      <input
                        className="w-full bg-orange-50 rounded-lg border-orange-500 p-3 text-sm"
                        placeholder="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                      />
                    </div>

                    <div>
                      <label className="block  text-sm font-medium" htmlFor="confirmPassword">Confirm Password</label>
                      <input
                        className="w-full rounded-lg bg-orange-50 border-gray-200 p-3 text-sm"
                        placeholder="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                      />
                      {passwordMatchError && <p className="text-red-600 text-sm">{passwordMatchError}</p>}
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium" htmlFor="loginEmail">Email</label>
                      <input
                        className="w-full rounded-lg bg-orange-50 border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="loginEmail"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium" htmlFor="loginPassword">Password</label>
                      <input
                        className="w-full rounded-lg bg-orange-50 border-gray-200 p-3 text-sm"
                        placeholder="Password"
                        type="password"
                        id="loginPassword"
                        required
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-200 hover:text-orange-500 focus:outline-none"
                >
                  {isRegistering ? 'Create Account' : 'Log in'}
                </button>
              </div>

              <div className="mt-4 text-center text-sm">
                {isRegistering ? (
                  <>
                    Already have an account?{' '}
                    <button onClick={toggleForm} className="text-orange-500 hover:bg-white">
                      Log in
                    </button>
                  </>
                ) : (
                  <>
                    Don’t have an account?{' '}
                    <button onClick={toggleForm} className="text-orange-500 hover:underline">
                      Sign up
                    </button>
                  </>
                )}
              </div>

              {!isRegistering && (
                <div className="mt-4 text-center text-sm">
                  <p>Or log in with:</p>
                  
                  <a
                    href="https://accounts.google.com"
                    target="_blank"
                    className="flex w-25 items-center justify-center rounded-lg bg-orange-600 px-4 py-2 text-white hover:bg-orange-200 hover:text-orange-500 focus:outline-none"
                  >
                    Google
                  </a>
                </div>
              )}
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default SignIn;
