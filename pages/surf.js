router.push(`/browse/${browse.toString()}`);
    }

    return (
        <form className="pt-44 space-x-4" onSubmit={handle}>
            <legend className="text-7xl pb-8">Surf Freely</legend>
            <input className="input w-7/12 h-10" placeholder="https://www.google.com" onChange={e => setURL(e.target.value)} required />
            <button className="text-4xl font-bold text-center border-none border-2 hover:text-purple-400" type="submit">&#8594;</button>
        </form>
    )
}
