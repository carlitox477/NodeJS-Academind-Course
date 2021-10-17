# Model View Control (MVC)
![MVC](/img/mvc.png)

Model:
* Responsible for representing your data
* Responsible for managing your data (saving, fetching,...)
* Doesn't matter if you manage data in memory, files, databases
* Contanins data-related logic

View:
* What users sees
* Shouldn't Contain too much logic

Controller:
* Connects Model and view
* Should only make sure that the two can communicate (in both directions)
