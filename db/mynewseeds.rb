
list = "

MANHATTAN

BRONX

BROOKLYN

QUEENS

STATEN ISLAND

NEW JERSEY

ALL DOWNTOWN

Battery Park City

Chelsea

West Chelsea

Chinatown

Civic Center

East Village

Financial District

Fulton/Seaport

Flatiron

NoMad

Gramercy Park

Greenwich Village

Noho

Little Italy

Lower East Side

Two Bridges

Nolita

Soho

Hudson Square

Stuyvesant Town/PCV

Tribeca

West Village

ALL MIDTOWN

Central Park South

Midtown

Midtown East

Kips Bay

Murray Hill

Sutton Place

Turtle Bay

Beekman

Midtown South

Midtown West

Hell's Kitchen

Hudson Yards

ROOSEVELT ISLAND

ALL UPPER EAST SIDE

Upper East Side

Carnegie Hill

Lenox Hill

Upper Carnegie Hill

Yorkville

ALL UPPER MANHATTAN

Central Harlem

South Harlem

East Harlem

Hamilton Heights

Inwood

Marble Hill

Morningside Heights

Washington Heights

Fort George

Hudson Heights

West Harlem

Manhattanville

ALL UPPER WEST SIDE

Upper West Side

Lincoln Square

Manhattan Valley"

new_list = list.split("\n")

my_new_list = new_list.select {|item| item != ""}
print(my_new_list)