import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";

export const Contact = ({ children }: { children: React.ReactNode }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="m-2 bg-slate-300 rounded-md shadow-lg p-4 w-[200px] md:w-auto">
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900">
                        Law Bay Advocates
                    </p>
                    <p className="text-sm text-orange-500">
                        <a href="https://maps.app.goo.gl/LYHM4t8MDsURb1k78">
                            Plot no. 162, Olorien, Njiro Road, Cul De Sac, Arusha, Tanzania, 0206
                        </a>
                    </p>
                    <p className="text-sm text-gray-600">
                        <a href="tel:+255 754 978 894" className=" ">
                            Phone: <span className="hover:underline text-orange-500">+255 754 978 894</span>
                        </a>
                    </p>
                    <p className="text-sm text-gray-600">
                        <a href="mailto:baptista@lawbay.co.tz" className=" ">
                            Email: <span className="hover:underline text-orange-500">baptista@lawbay.co.tz</span>
                        </a>
                    </p>
                </div>
            </PopoverContent>
        </Popover>
    );
};
