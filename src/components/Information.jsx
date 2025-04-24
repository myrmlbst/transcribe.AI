import React, { useState, useRef } from 'react';
import Transcription from './Transcription';
import Translation from './Translation';

function Information(props) {
	const [tab, setTab] = useState('Transcription');
	const [downloading, setDownloading] = useState(false);
	const [copied, setCopied] = useState(false);

	const { text } = props;

	const translatedText = useRef('');
	const language = useRef('Select language');

	const handleTabChange = (e) => {
		setTab(e.target.innerText);
	};

	const handleCopy = () => {
		const textToCopy = tab === 'Translation' ? translatedText.current : text;
		if (!textToCopy) {
			return;
		}
		setCopied(true);
		navigator.clipboard.writeText(textToCopy);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	const handleDownload = () => {
		const textToDownload = tab === 'Translation' ? translatedText.current : text;
		if (downloading || !textToDownload) {
			return;
		}
		setDownloading(true);
		const element = document.createElement('a');
		const file = new Blob([textToDownload], { type: 'text/plain' });
		element.href = URL.createObjectURL(file);
		element.download = tab === 'Translation' ? `Translation.txt` : `Transcription.txt`;
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		setDownloading(false);
	};

	return (
		<main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 sm:pt-[22vh] lg:pt-[18vh] md:pt-[22vh] justify-center pb-20 w-full max-w-fit mx-auto mt-10'>

			<h1 className='font-semibold text-3xl sm:text-5xl md:text-6xl'>
				Your <span className='text-blue-400 bold nowrap'>{tab}</span>
			</h1>

			<div className='grid grid-cols-2 sm:mx-auto rounded-xl overflow-hidden items-center p-1 bg-blue-100 blueShadow border-[2px] border-solid border-blue-300'>
				<button className={'px-4 rounded-xl duration-200 py-1 ' + (tab === 'Transcription' ? ' bg-blue-300 text-white' : ' text-blue-400 hover:text-blue-300')}
								onClick={handleTabChange}
				>
					Transcription
				</button>

				<button className={'px-4 rounded-xl duration-200 py-1 ' + (tab === 'Translation' ? ' bg-blue-300 text-white' : ' text-blue-400 hover:text-blue-300')}
								onClick={handleTabChange}
				>
					Translation
				</button>
			</div>

			<div className='fixed-height-container text-slate-500'>
				{
					tab === 'Transcription' ?
						(<Transcription text={text} />) :
						(<Translation text={text} translatedText={translatedText} language={language} />)
				}
			</div>

			<div className='flex items-center gap-4 mx-auto mt-0'>
				<button onClick={handleCopy}
								title="Copy to clipboard"
								className='bg-white hover:text-blue-400 duration-200 text-blue-300 px-2 aspect-square grid place-items-center rounded-xl'
				>
					{copied ? <i className="fa-solid fa-check" style={{ fontSize: '20px' }}></i> :
						<i className="fa-solid fa-copy" style={{ fontSize: '20px' }}></i>
					}
				</button>

				<button onClick={handleDownload}
								title="Download"
								className='bg-white hover:text-blue-400 duration-200 text-blue-300 px-2 aspect-square grid place-items-center rounded-xl'
				>
					<i className="fa-solid fa-download" style={{ fontSize: '20px' }}></i>
				</button>
			</div>

		</main>
	);
}

export default Information;
