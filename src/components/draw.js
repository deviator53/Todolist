{isMobile ? (
    <DrawerComponent />
    ) : (
    <div className={classes.linkItems}>
        <div className={classes.linkItem}>
            <Typography className={classes.linkText}>Home</Typography>
        </div>

        <div className={classes.linkItem}>
            <Typography className={classes.linkText}>About</Typography>
        </div>

        <div className={classes.linkItem}>
            <Typography className={classes.linkText}>Shop</Typography>
        </div>

        <div className={classes.linkItem}>
            <Typography className={classes.linkText}>Blog</Typography>
        </div>

        <div className={classes.linkItem}>
            <Typography className={classes.linkText}>Contact</Typography>
        </div>
    </div>
            )}