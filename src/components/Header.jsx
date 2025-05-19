import React from 'react';

const Header = (props) => {
  const { handleNew } = props;

  return (
    <header className='flex items-center justify-between gap-4 p-4'>
      <a href="/Transcribe.AI/">
        <h1 className='font-bold'>
          <span className='hover:text-gray-500'>Transcribe.</span>
          <span className='text-blue-400 hover:text-blue-300'>AI</span>
        </h1>
      </a>

      <div className='flex items-center gap-4'>
        <a
          href="/Transcribe.AI/"
          className={`specialBtn flex items-center gap-2 px-3 py-1 rounded-lg text-blue-400 cursor-pointer transition-opacity duration-300`}
        >
          <p>New</p>
          <i className="fa-solid fa-plus"></i>
        </a>
      </div>

    </header>
  );
}

export default Header;
