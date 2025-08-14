const galleryItemsData = [
    // قسم المناظر الطبيعية والبيوت التراثية
    {
        type: 'image',
        src: 'image0.jpg',
        alt: 'صورة بانورامية لحصاحص تظهر فيها البيوت التراثية والحقول الخضراء',
        heading: 'حصاحص: لوحة فنية من الجمال',
        description: 'منظر بانورامي ساحر لمنطقة حصاحص، يجمع بين البيوت التراثية المبنية على التلال والحقول والسماء المليئة بالغيوم.',
        likes: 0
    },
    {
        type: 'image',
        src: 'image15.jpg',
        alt: 'صورة لمسجد حصاحص القديم',
        heading: 'المسجد الكبير (المطرح)',
        description: 'صورة للمسجد الكبير والقديم في حصاحص (االمطرح)، يعتبر معلم تاريخي وروحاني للمنطقة.',
        likes: 0
    },
    {
        type: 'image',
        src: 'dar_al_mashtal.jpg',
        alt: 'صورة لدار المشتل في حصاحص يافع',
        heading: 'دار المشتل: شموخ التاريخ',
        description: 'هنا يقف "دار المشتل" في حصاحص يافع، رمزًا للشموخ والتاريخ العريق. برج حجري صلب، يحمل في طياته إرث سلاطين آل هرهره، ويُبهر كل من يراه.',
        link: 'dar_al_mashtal_details.html',
        likes: 0
    },
    {
        type: 'image',
        src: 'image10.jpg',
        alt: 'صورة لحارة المطرح القديمة في حصاحص',
        heading: 'حارة المطرح: ملتقى الأجداد وتراث الأيام',
        description: 'صورة توثق حارة المطرح القديمة في حصاحص، حيث كانت هذه الحارة ملتقى الأجداد ومكانًا لتبادل الأحاديث. يبرز فيها المسجد العتيق كأحد أهم معالمها، شاهدًا على عراقة تاريخها وأصالة أهلها.',
        likes: 0
    },
    {
        type: 'image',
        src: '1000080148.png',
        alt: 'صورة لمدرسة أبي موسى الأشعري للتعليم الأساسي في حصاحص',
        heading: 'مدرسة أبي موسى الأشعري',
        description: 'صورة توثق مدرسة أبي موسى الأشعري للتعليم الأساسي في حصاحص، وهي تعتبر صرح تعليمي هام في المنطقة،حيث ياتي اليها الطلاب من كل المناطق المجاورة.',
        likes: 0
    },
    {
        type: 'image',
        src: 'image21.jpg',
        alt: 'صورة لقرية حصاحص ليلاً',
        heading: 'حصاحص في الليل',
        description: 'صورة ساحرة لقرية حصاحص في الليل، حيث تتلألأ أضواء البيوت وسط الظلام، مما يضفي عليها جمالاً خاصاً.',
        likes: 0
    },
    {
        type: 'image',
        src: 'image2.jpg',
        alt: 'صورة لمنظر طبيعي',
        heading: 'وادي نقد جناح',
        description: 'منظر طبيعي خلاب لوادي حصاحص في فصل الصيف.',
        likes: 0
    },
    {
        type: 'image',
        src: 'image20.jpg',
        alt: 'صورة لقرية حصاحص مع انعكاسها على الماء',
        heading: 'حصاحص: مرآة الطبيعة',
        description: 'صورة فريدة تظهر فيها قرية حصاحص بانعكاسها الجميل على سطح الماء، مما يجسد لوحة فنية طبيعية خلابة.',
        likes: 0
    },
    {
        type: 'image',
        src: 'image4.jpg',
        alt: 'مجموعة من المنازل القديمة في حصاحص',
        heading: 'بيوت حصاحص التراثية',
        description: 'لقطة لمجموعة من البيوت القديمة التي تظهر جمال العمارة التقليدية في حصاحص.',
        likes: 0
    },
    {
        type: 'image',
        src: 'image3.jpg',
        alt: 'صورة لقرية حصاحص تحت سماء ملبدة بالغيوم',
        heading: 'سماء حصاحص المليئة بالغيوم (وادي غول هليب)',
        description: 'صورة رائعة من وادي غولهليب يظهر فيها دار المشتل التاريخي الشامخ على الجبل تحت سماء مليئة بالغيوم، مما يعكس الأجواء الماطرة التي تشتهر بها المنطقة.',
        likes: 0
    },
    {
        type: 'image',
        src: 'image5.jpg',
        alt: 'صورة بانورامية لحقول خضراء',
        heading: 'حقول حصاحص الخضراء',
        description: 'منظر بانورامي لحقول الذرة الخضراء المورقة في  وادي حصاحص.',
        likes: 0
    },
    {
        type: 'image',
        src: 'image12.jpg',
        alt: 'منظر بانورامي للجبال المحيطة بحصاحص',
        heading: 'جبال حصاحص الشاهقة',
        description: 'منظر بانورامي مهيب للجبال التي تحيط بحصاحص، تظهر روعتها وعظمتها.',
        likes: 0
    },
    {
        type: 'image',
        src: 'image6.jpg',
        alt: 'صورة محسّنة بالذكاء الاصطناعي لمنطقة حصاحص',
        heading: 'جمال حصاحص بتوقيع الذكاء الاصطناعي',
        description: 'تأمّل سحر حصاحص في هذه الصورة المُعزّزة بالذكاء الاصطناعي، حيث تتجلّى التفاصيل بوضوح أخّاذ  لترسم مشهدًا طبيعيًا يفوق الخيال.',
        likes: 0
    },
    {
        type: 'image',
        src: 'image9.jpg',
        alt: 'الشهيد ابو قصي الحدي من حصاحص',
        heading: 'صورة الشهيد: محمد حسين عمر الحدي (ابو قصي) رحمة الله تغشاه',
        description: 'حصاحص ايضاً هي مسقط راس الشهيد ابو قصي هرهره، الذي استشهد في عام(٢٠١٥م) في جبهة جعولة ضد المليشيات الحوثية،  كان قائد جبهة جعولة آنذاك، فسطر اروع الانتصارات والبطولات حتى استشهد،...... (الله يرحمه ويغفر له ويسكنه فسيح جناته).',
        likes: 0
    },
    {
        type: 'image',
        src: 'image7.jpg',
        alt: 'صورة جوية لوادي حصاحص',
        heading: 'صورة جوية لوادي حصاحص',
        description: 'صورة جوية تبرز جمال المنطقة وتظهر في الصورة مدرسة حصاحص، تعتبر مصدر فخر لحصاحص.',
        likes: 0
    },
    {
        type: 'image',
        src: '1000076399.jpg',
        alt: 'صورة لجرار يحرث أرض حصاحص',
        heading: 'حصاد الخير: تحضير الأرض للزراعة',
        description: 'صورة توثق أحد أبناء حصاحص وهو يستخدم جراراً حديثاً لحراثة الأرض الزراعية، استعدادًا لموسم زراعي جديد. هذا العمل يجسد العلاقة الوثيقة بين أهل المنطقة وأرضهم، وجهودهم الدائمة في إعمارها وتنميتها.',
        likes: 0
    },
    {
        type: 'image',
        src: '1000074706.png',
        alt: 'استقبال مهيب للسلطان الذهب في قرية المحجبه',
        heading: 'استقبال السلطان الذهب: عرس يافعي مهيب',
        description: 'صور توثق الاستقبال الحاشد والمهيب للسلطان الذهب، سلطان آل هرهره، في قرية المحجبه بيافع. يظهر في الصور أبناء ومشايخ منطقة حصاحص، من بينهم الشيخ صالح عمر والشيخ ناصر منصر، وهم يشاركون في الرقصات الشعبية التقليدية، معبرين عن ترحيبهم وفخرهم بهذا الحدث الذي يجمع الأهل ويوثق عراقة التراث اليافعي.',
        likes: 0
    },
    {
        type: 'image',
        src: 'image8.jpg',
        alt: 'صورة لبعض رجال وشباب حصاحص',
        heading: 'صورة لبعض رجال وشباب حصاحص',
        description: 'صورة جماعية لبعض من رجال وشباب منطقة حصاحص ٢٠٢٠م .في مجلس احد ابناء المنطقة بإحد المناسبات.',
        likes: 0
    },
    {
        type: 'image',
        src: '1000080243.jpg',
        alt: 'صورة ولد  في حصاحص عام 2016',
        heading: ' ذكريات من حصاحص عام 2016',
        description: 'صورة للطفل رشدي عيدروس محمد هرهره، التُقطت في عام 2016. يظهر رشدي بملامح طفولية بريئة في قلب الطبيعة الخلابة لقرية حصاحص. تجمع الصورة بين جمال الطفولة وأصالة المكان، وتوثق لحظة من ذكريات المنطقة.',
        likes: 0
    },
    // قسم الفيديوهات
    {
        type: 'video',
        src: 'video1.mp4',
        title: 'فيديو بعد نزول المطر',
        heading: 'نزول المطر',
        description: 'م8/7/2025/ فيديو قصير بعد نزول المطر. حيث الماء يملئ الاراضي الزراعية. يجسد منظر جميل ورائع.',
        likes: 0
    },
    {
        type: 'video',
        src: 'video2.mp4',
        title: 'فيديو جميل عن حصاحص',
        heading: 'فيديو تيك توك',
        description: 'مقطع فيديو جودة عالية من تطبيق التيك توك يظهر بعض الصور الرائعة لمنطقة حصاحص.',
        likes: 0
    },
    {
        type: 'video',
        src: 'video3.mp4',
        title: 'امطار في وادي جشاش حصاحص',
        heading: 'وادي جشاش',
        description: 'فيديو يوثق أحد أيام نزول الامطارفي وادي جشاش في منطقة حصاحص ، 11/7/2025م .',
        likes: 0
    },
    {
        type: 'video',
        src: 'video4.mp4',
        title: 'تصميم حصاحص',
        heading: 'تصوير علي ناصر ابو حسين هرهره',
        description: 'فيديو جميل جدا يظهر قوة وجمال منطقة حصاحص الخضراء في موسم الزراعة بعد الأمطار منظر طبيعي يأسر القلوب.',
        likes: 0
    },
    {
        type: 'video',
        src: 'video5.mp4',
        title: 'حصاحص في 2030',
        heading: 'حصاحص في 2030م تصميم هايل هرهره',
        description: 'مقطع فيديو من تصميم {هايل عيدروس محمد هرهره} تم التصميم بـ2017*,التصميم عبارة عن تخيل لمنطقة حصاحص بعد 2030*, بعد التطور انشاء الله.',
        likes: 0,
        styleClass: 'tall-video' // هذا هو التعديل لإعطاء الفيديو ارتفاعًا خاصًا
    },
    {
        type: 'video',
        src: 'video6.mp4',
        title: 'فيديو للأمطار الصيفية في حصاحص',
        heading: 'أجواء المطر الصيفي',
        description: 'مقطع فيديو يوثق جمال الأمطار الصيفية وهي تروي الأرض، مع صوت خرير الماء المنعش.',
        likes: 0
    },
    {
        type: 'video',
        src: 'video7.mp4',
        title: 'قصيدة الشاعر خريش الحدي اليافعي لحصاحص',
        heading: 'قصيدة من حصاحص للشاعر خريش الحدي.',
        description: 'فيديو يعرض بعض من الصور لمنطقة حصاحص،مع مع قصيدة الشاعر الكبير خريش الحدي اليافعي ٢٠٢٤م',
        likes: 0
    },
    {
        type: 'video',
        src: 'video8.mp4',
        title: 'حفل زفاف تقليدي',
        heading: 'عرس حصاحصي',
        description: 'مقتطفات من حفل زفاف تقليدي في حصاحص، تبرز العادات والتقاليد المحلية.',
        likes: 0
    },
];

// دالة لإنشاء عنصر المعرض بالكامل (صورة أو فيديو) مع كل تفاصيله
function createGalleryItem(item) {
    const galleryItemDiv = document.createElement('div');
    galleryItemDiv.classList.add('gallery-item');
    
    if (item.styleClass) {
        galleryItemDiv.classList.add(item.styleClass);
    }

    let mediaElement;
    if (item.type === 'image') {
        mediaElement = document.createElement('img');
        mediaElement.src = item.src;
        mediaElement.alt = item.alt;
    } else if (item.type === 'video') {
        mediaElement = document.createElement('video');
        mediaElement.controls = true;
        mediaElement.playsInline = true;
        mediaElement.title = item.title;
        const sourceElement = document.createElement('source');
        sourceElement.src = item.src;
        sourceElement.type = 'video/mp4';
        mediaElement.appendChild(sourceElement);
        mediaElement.appendChild(document.createTextNode('متصفحك لا يدعم تشغيل الفيديو.'));
    }

    const itemInfoDiv = document.createElement('div');
    itemInfoDiv.classList.add('item-info');

    const headingElement = document.createElement('h3');
    headingElement.textContent = item.heading;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = item.description;

    itemInfoDiv.appendChild(headingElement);
    itemInfoDiv.appendChild(descriptionElement);

    if (item.link) {
        const readMoreBtn = document.createElement('a');
        readMoreBtn.href = item.link;
        readMoreBtn.textContent = 'المزيد عن دار المشتل';
        readMoreBtn.classList.add('read-more-btn');
        itemInfoDiv.appendChild(readMoreBtn);
    }

    const feedbackSection = document.createElement('div');
    feedbackSection.classList.add('feedback-section');

    const likeButton = document.createElement('button');
    likeButton.classList.add('like-button');
    likeButton.innerHTML = '&#128077; إعجاب';

    const likeCountSpan = document.createElement('span');
    likeCountSpan.classList.add('like-count');
    likeCountSpan.textContent = item.likes;

    likeButton.addEventListener('click', () => {
        item.likes++;
        likeCountSpan.textContent = item.likes;
    });

    feedbackSection.appendChild(likeButton);
    feedbackSection.appendChild(likeCountSpan);

    galleryItemDiv.appendChild(mediaElement);
    galleryItemDiv.appendChild(itemInfoDiv);
    galleryItemDiv.appendChild(feedbackSection);

    return galleryItemDiv;
}

// الكود يبدأ بالعمل بعد تحميل صفحة HTML بالكامل
document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('gallery-container');

    // مراقب خاص بالفيديوهات لإيقافها عند الخروج من مجال الرؤية
    const videosObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const video = entry.target;
            if (entry.isIntersecting) {
                // يمكنك إضافة كود لتشغيل الفيديو هنا إذا رغبت
            } else {
                // الفيديو خارج مجال الرؤية، قم بإيقافه
                video.pause();
            }
        });
    }, { rootMargin: '0px', threshold: 0.5 });
    
    // مراقب خاص بالتحميل التدريجي (Lazy Loading)
    const galleryObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // العنصر الوهمي الآن في مجال الرؤية
                const itemPlaceholder = entry.target;
                const index = itemPlaceholder.dataset.index;
                const itemData = galleryItemsData[index];
                
                if (itemData) {
                    // إنشاء العنصر الحقيقي (صورة أو فيديو)
                    const galleryItem = createGalleryItem(itemData);
                    // استبدال العنصر الوهمي بالعنصر الحقيقي
                    galleryContainer.replaceChild(galleryItem, itemPlaceholder);
                    
                    // إذا كان العنصر الجديد فيديو، قم بإضافته لمراقب الفيديوهات
                    if (itemData.type === 'video') {
                        const videoElement = galleryItem.querySelector('video');
                        if (videoElement) {
                            videosObserver.observe(videoElement);
                        }
                    }
                }
                // بعد إنشاء العنصر، لم نعد بحاجة لمراقبة العنصر الوهمي
                observer.unobserve(itemPlaceholder);
            }
        });
    }, { rootMargin: '200px' }); // زيادة الهامش لتحميل العناصر قبل أن تصبح مرئية

    // في البداية، نقوم بإنشاء عناصر وهمية (placeholders) لكل عنصر في البيانات
    galleryItemsData.forEach((item, index) => {
        const itemPlaceholder = document.createElement('div');
        itemPlaceholder.classList.add('gallery-item-placeholder');
        itemPlaceholder.dataset.index = index; // حفظ الفهرس للوصول إلى البيانات لاحقًا
        galleryContainer.appendChild(itemPlaceholder);
        // نراقب كل عنصر وهمي
        galleryObserver.observe(itemPlaceholder);
    });

});
